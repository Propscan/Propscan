# filters.py
import django_filters
from .models import PropertyType1, PropertyType2, PropertyType3

class PropertyType1Filter(django_filters.FilterSet):
    locality = django_filters.CharFilter(field_name="locality", lookup_expr='icontains')
    locality_society = django_filters.CharFilter(field_name="locality_society", lookup_expr='icontains')
    sub_locality = django_filters.CharFilter(field_name="sub_locality", lookup_expr='icontains')
    location_advantages = django_filters.CharFilter(field_name="location_advantages", lookup_expr='icontains')

    class Meta:
        model = PropertyType1
        fields = {
            'listing_type': ['exact', 'icontains'],
            'user': ['exact'],
            'locality': ['exact', 'icontains'],
            'locality_society': ['exact', 'icontains'],
            'sub_locality': ['exact', 'icontains'],
            'location_advantages': ['exact', 'icontains'],
        }

class PropertyType2Filter(django_filters.FilterSet):
    locality = django_filters.CharFilter(field_name="locality", lookup_expr='icontains')
    locality_society = django_filters.CharFilter(field_name="locality_society", lookup_expr='icontains')
    sub_locality = django_filters.CharFilter(field_name="sub_locality", lookup_expr='icontains')
    location_advantages = django_filters.CharFilter(field_name="location_advantages", lookup_expr='icontains')

    class Meta:
        model = PropertyType2
        fields = {
            'listing_type': ['exact', 'icontains'],
            'user': ['exact'],
            'locality': ['exact', 'icontains'],
            'locality_society': ['exact', 'icontains'],
            'sub_locality': ['exact', 'icontains'],
            'location_advantages': ['exact', 'icontains'],
        }

class PropertyType3Filter(django_filters.FilterSet):
    locality = django_filters.CharFilter(field_name="locality", lookup_expr='icontains')
    locality_society = django_filters.CharFilter(field_name="locality_society", lookup_expr='icontains')
    sub_locality = django_filters.CharFilter(field_name="sub_locality", lookup_expr='icontains')
    location_advantages = django_filters.CharFilter(field_name="location_advantages", lookup_expr='icontains')

    class Meta:
        model = PropertyType3
        fields = {
            'listing_type': ['exact', 'icontains'],
            'user': ['exact'],
            'locality': ['exact', 'icontains'],
            'locality_society': ['exact', 'icontains'],
            'sub_locality': ['exact', 'icontains'],
            'location_advantages': ['exact', 'icontains'],
        }
