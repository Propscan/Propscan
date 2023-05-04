# filters.py
import django_filters
from .models import PropertyType1, PropertyType2, PropertyType3

class PropertyType1Filter(django_filters.FilterSet):
    class Meta:
        model = PropertyType1
        fields = {
            'listing_type': ['exact', 'icontains'],
            'user': ['exact'],
        }

class PropertyType2Filter(django_filters.FilterSet):
    class Meta:
        model = PropertyType2
        fields = {
            'listing_type': ['exact', 'icontains'],
            'user': ['exact'],
        }

class PropertyType3Filter(django_filters.FilterSet):
    class Meta:
        model = PropertyType3
        fields = {
            'listing_type': ['exact', 'icontains'],
            'user': ['exact'],
        }
