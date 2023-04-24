from rest_framework import serializers
from .models import PropertyType1

class PropertyType1Serializer(serializers.ModelSerializer):
    class Meta:
        model = PropertyType1
        fields = '__all__'

class PropertyType1LimitedSerializer(serializers.ModelSerializer):
    class Meta: 
        model = PropertyType1
        fields = ('images_link', 'total_floors', 'expected_price', 'listing_type')