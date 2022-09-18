from django.apps import AppConfig


# class ClothingConfig(AppConfig):
#     default_auto_field = 'django.db.models.BigAutoField'
#     name = 'apps.clothing'
    

class ClothingConfig(AppConfig):
    # optional, add default auto field
    default_auto_field = 'django.db.models.BigAutoField'
    # set location of app using sub dir
    name = 'clothing'
    # optional, add name of app
    verbose_name = 'Clothing App Verbose Name'

