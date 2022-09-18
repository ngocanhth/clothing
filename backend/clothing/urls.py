from django.urls import path, re_path, include
from . import views
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register("api/clothing", views.ClothingViewSet)
router.register("api/lessons", views.LessonViewSet)
# router.register("api/user", views.UserViewSet)

urlpatterns = [
    path('clothing-index', views.index, name='index'),
    path('welcome/<int:welcome_id>', views.welcome, name='welcome'), # path conveter
    re_path(r'^welcome2/(?P<year>[0-9]{1,2})/$', views.welcome2, name='welcome2'), # bao gom cac chu so tu 0 den 9 toi thiue 1 chu so va toi da 2 chu so
    re_path(r'^welcome2/(?P<year>[0-9]{4})/$', views.welcome2, name='welcome2'), # 4 chu so
    path('detail/', views.detail, name='detail'),
    path('testview/', views.TestView.as_view(), name='testview'),
    
    # path('register/', views.UserRegisterView.as_view(), name='register'),
    
    
    # /clothing/ - GET   
    # /clothing/ - POST   
    # /clothing/{course_id} - PUT   
    # /clothing/{course_id}  - GET   
    # /clothing/{course_id}  - DELETE   
   
    path('', include(router.urls)),
]