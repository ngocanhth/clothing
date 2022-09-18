from dataclasses import field
from rest_framework.serializers import ModelSerializer
from .models import User
from django.contrib.auth.hashers import make_password

class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'first_name', 'last_name', 'username', 'email', 'password', 'avatar']
        extra_kwargs = {
            'password': {'write_only': True}
        }
        
        # def create(self, validated_data):
        #     # user = User()
        #     # user.first_name = validated_data['first_name']
        #     # user.last_name = validated_data['last_name']
        #     # user.set_password(validated_data['password'])
            
        #     user = User(**validated_data) # giu nguyen cac thong tin
        #     user.set_password(validated_data['password']) # overide lai field can 
        #     user.save()
            
        #     return user
            
        
        # def create(self, validated_data):
        #     user = super().create(validated_data)
        #     user.set_password(validated_data['password'])
        #     user.save()
        #     return user
        
        # def validate_password(self, value: str) -> str:
        #     return make_password(value)