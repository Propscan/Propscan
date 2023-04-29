from rest_framework import serializers
from .models import PropertyType1, PropertyType2

#type1 ser
class PropertyType1Serializer(serializers.ModelSerializer):
    class Meta:
        model = PropertyType1
        fields = '__all__'

class PropertyType1SmallCardSerializer(serializers.ModelSerializer):
    class Meta: 
        model = PropertyType1
        fields = ('images_link', 'total_floors', 'expected_price', 'listing_type')

class PropertyType1LargeCardSerializer(serializers.ModelSerializer):
    class Meta: 
        model = PropertyType1
        fields = ('images_link', 'total_floors', 'expected_price', 'listing_type')
        
#type2 ser
class PropertyType2Serializer(serializers.ModelSerializer):
    class Meta:
        model = PropertyType2
        fields = '__all__'

class PropertyType2SmallCardSerializer(serializers.ModelSerializer):
    class Meta: 
        model = PropertyType2
        fields = ('images_link', 'total_floors', 'expected_price', 'listing_type')

class PropertyType2LargeCardSerializer(serializers.ModelSerializer):
    class Meta: 
        model = PropertyType2
        fields = ('images_link', 'total_floors', 'expected_price', 'listing_type')