from django.shortcuts import render
from .models import Post
from .serializers import PostSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

@api_view(["GET"])
def get_posts(request):
    posts = Post.objects.all()
    serialized_data = PostSerializer(posts, many=True, context={'request': request})
    return Response(serialized_data.data)

@api_view(["POST"])
def create_post(request):
    data = request.data
    files = request.FILES
    serializer = PostSerializer(data=data)
    if serializer.is_valid():
        serializer.save(image=files.get('image'))
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    else:
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
