# Create your views here.
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import permissions
from .models import Subtitles
from .serializers import SubtitlesSerializer


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
            genre=request.data.get('genre')
        )
        serializer = SubtitlesSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



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
            'genre': request.data.get('genre')
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
