from django.contrib.auth.hashers import make_password
from rest_framework.decorators import action
from rest_framework.views import APIView
from .models import User
from .serializers import UserSerializer
from rest_framework import viewsets, permissions, status, generics
from .serializers import UserSerializer
from rest_framework.decorators import action
from rest_framework.parsers import MultiPartParser

from rest_framework.response import Response
# Create your views here.


class UserRegisterView(APIView):
    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.validated_data['password'] = make_password(serializer.validated_data['password'])
            user = serializer.save()
            
            return JsonResponse({
                'message': 'Register successful!'
            }, status=status.HTTP_201_CREATED)

        else:
            return JsonResponse({
                'error_message': 'This email has already exist!',
                'errors_code': 400,
            }, status=status.HTTP_400_BAD_REQUEST)


class UserViewSet(
        viewsets.ViewSet, 
        # generics.ListAPIView,
        # generics.UpdateAPIView,  
        generics.CreateAPIView, 
        generics.RetrieveAPIView):
    queryset = User.objects.filter(is_active=True)
    serializer_class = UserSerializer
    parser_class = [MultiPartParser, ]
    
    # def get_permissions(self):
    #     if(self.action == 'retrieve'):
    #         return [permissions.IsAuthenticated()]

    #     return [permissions.AllowAny()]     