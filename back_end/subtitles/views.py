# Create your views here.
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, permissions,generics
from .models import Subtitles
from .serializers import SubtitlesSerializer,SearchSerializer
import os
from django.http import FileResponse,HttpResponseNotFound
from django.conf import settings
from django.shortcuts import get_object_or_404
from django.db.models import F
class SubtitlesApiView(APIView):
    # permission_classes = [permissions.IsAuthenticated]

    def get(self, request, *args, **kwargs):
        subtitles = Subtitles.objects.all()
        serializer = SubtitlesSerializer(subtitles, many=True)

        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request, *args, **kwargs):
        data = dict(
            name=request.data.get("name"),
            type=request.data.get('type'),
            genre=request.data.get('genre'),
            year = request.data.get('year')
        )
        serializer = SubtitlesSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



def download_file(request, folder_path, file_name,id):
    # Construct the full path to the file

    file_path = os.path.join(settings.MEDIA_ROOT, folder_path, file_name)
    print(f"Download requested for subtitle ID: {id}")


    # Check if the file exists
    if os.path.exists(file_path):
        # Serve the file using FileResponse

        subtitle = get_object_or_404(Subtitles, id=id)
        subtitle.download_counter = F('download_counter') + 1
        subtitle.save()
        return FileResponse(open(file_path, 'rb'), as_attachment=True)
    else:
        # Return a 404 error if the file does not exist
        return HttpResponseNotFound("File not found")


class SubtitleDetailedView(APIView):
    def get_object(self, subtitle_id):
        try:
            return Subtitles.objects.get(id=subtitle_id)
        except Subtitles.DoesNotExist:
            return None

    def get(self, request, subtitle_id, *args, **kwargs):
        subtitle_instance = self.get_object(subtitle_id)
        if not subtitle_instance:
            return Response(
                {"res": "Object with subtitle_id does not exists"},
                status=status.HTTP_400_BAD_REQUEST
            )

        serializer = SubtitlesSerializer(subtitle_instance)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, subtitle_id, *args, **kwargs):
        subtitle_instance = self.get_object(subtitle_id)
        if not subtitle_instance:
            return Response(
                {'res': 'Object with subtitle_id does not exists'},
                status=status.HTTP_400_BAD_REQUEST
            )

        data = {
            'name': request.data.get('name'),
            'type': request.data.get('type'),
            'genre': request.data.get('genre'),
            'year': request.data.get('year')
        }
        serializer = SubtitlesSerializer(instance=subtitle_instance, data=data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, subtitle_id, *args, **kwargs):
        subtitle_instance = self.get_object(subtitle_id)
        if not subtitle_instance:
            return Response(
                {'res': 'Object with subtitle_id does not exists'},
                status=status.HTTP_400_BAD_REQUEST
            )
        subtitle_instance.delete()
        return Response(
            {'res':'Object deleted!'},
            status=status.HTTP_200_OK
        )



class subtitleSearchView(APIView,):
    def get(self, request, format=None):
        serializer = SearchSerializer(data=request.query_params)
        if serializer.is_valid():
            search_query = serializer.validated_data.get('search_query', '')
            queryset = Subtitles.objects.filter(name__icontains=search_query).values()
            return Response({"subtitles": list(queryset)})
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)





class YourModelList(generics.ListAPIView):
    queryset = Subtitles.objects.all()
    serializer_class = SubtitlesSerializer