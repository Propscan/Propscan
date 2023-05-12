from django.urls import path
from . import views

urlpatterns = [
    path('create/type1', views.create_type1, name='create_type1'),
    path('create/type2', views.create_type2, name='create_type2'),
    path('create/type3', views.create_type3, name='create_type3'),
    path('getfull/type1', views.getfull_type1, name='getfull_type1'),
    path('getfull/type2', views.getfull_type2, name='getfull_type2'),
    path('getfull/type3', views.getfull_type3, name='getfull_type3'),
    path('largecard/type1', views.largecard_type1, name='largecard_type1'),
    path('largecard/type2', views.largecard_type2, name='largecard_type2'),
    path('largecard/type3', views.largecard_type3, name='largecard_type3'),
    path('smallcard/type1', views.smallcard_type1, name='smallcard_type1'),
    path('smallcard/type2', views.smallcard_type2, name='smallcard_type2'),
    path('smallcard/type3', views.smallcard_type3, name='smallcard_type3'),
    path('<int:pk>/unlist/type1', views.unlist_type1, name='unlist_type1'),
    path('<int:pk>/unlist/type2', views.unlist_type2, name='unlist_type2'),
    path('<int:pk>/unlist/type3', views.unlist_type3, name='unlist_type3'),
    path('api/location/', views.get_user_location, name='get_user_location'),
    path('location/',views.location_page.as_view(),name='location_page'),
]

