from django.urls import path
from api import views

app_name = 'api'

urlpatterns = [
    path('posts/', views.get_posts, name="posts"),
    path('posts/create/', views.create_post, name="create_post"),
]