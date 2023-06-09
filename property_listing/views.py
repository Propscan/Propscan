from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.shortcuts import render
from .serializers import PropertyType1Serializer, PropertyType1LargeCardSerializer, PropertyType1SmallCardSerializer
from .serializers import PropertyType2Serializer, PropertyType2LargeCardSerializer, PropertyType2SmallCardSerializer
from .serializers import PropertyType3Serializer, PropertyType3LargeCardSerializer, PropertyType3SmallCardSerializer
from .models import PropertyType1, PropertyType2, PropertyType3
from rest_framework import status
from .filters import PropertyType1Filter, PropertyType2Filter, PropertyType3Filter

from django.http import JsonResponse
import googlemaps

from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.views import APIView
from rest_framework.views import APIView
from .models import CRMStatus


class location_page(APIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]
    
    
    def get(self,request):
        gmaps = googlemaps.Client(key='AIzaSyCzkfZU5H2EfmRZdzubLoVas9t8E32uroU')
        location = gmaps.geolocate()
        latlng = location['location']
        geocode_result = gmaps.reverse_geocode((latlng['lat'], latlng['lng']))
        city = ""
        for component in geocode_result[0]['address_components']:
            if 'locality' in component['types']:
                city = component['long_name']
                break
        return JsonResponse({'city': city})
    
def get_user_location(request):
    latitude = request.GET.get('latitude')
    longitude = request.GET.get('longitude')
    # Process the latitude and longitude as needed
    # ...
    return JsonResponse({'message': 'Location received'})


#TYPE 1 VIEWS
@api_view(['POST'])
def create_type1(request):
    serializer = PropertyType1Serializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({"message": "Property Created Successfully"}, status=status.HTTP_201_CREATED)
    else:
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def getfull_type1(request):
    properties = PropertyType1.objects.filter(is_listed=True)
    filters = PropertyType1Filter(request.GET, queryset=properties)
    serializer = PropertyType1Serializer(filters.qs, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def smallcard_type1(request):
    properties = PropertyType1.objects.filter(is_listed=True)
    filters = PropertyType1Filter(request.GET, queryset=properties)
    serializer = PropertyType1SmallCardSerializer(filters.qs, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def largecard_type1(request):
    properties = PropertyType1.objects.filter(is_listed=True)
    filters = PropertyType1Filter(request.GET, queryset=properties)
    serializer = PropertyType1LargeCardSerializer(filters.qs, many=True)
    return Response(serializer.data)

@api_view(['PUT'])
def unlist_type1(request, property_id):
    try:
        property_instance = PropertyType1.objects.get(pk=property_id)
    except PropertyType1.DoesNotExist:
        return Response({"detail": "Property not found."}, status=status.HTTP_404_NOT_FOUND)

    property_instance.is_listed = False
    property_instance.save()

    serializer = PropertyType1Serializer(property_instance)
    return Response(serializer.data, status=status.HTTP_200_OK)

#TYPE2 VIEWS
@api_view(['POST'])
def create_type2(request):
    serializer = PropertyType2Serializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({"message": "Property Created Successfully"}, status=status.HTTP_201_CREATED)
    else:
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def getfull_type2(request):
    properties = PropertyType2.objects.filter(is_listed=True)
    filters = PropertyType2Filter(request.GET, queryset=properties)
    serializer = PropertyType2Serializer(filters.qs, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def smallcard_type2(request):
    properties = PropertyType2.objects.filter(is_listed=True)
    filters = PropertyType2Filter(request.GET, queryset=properties)
    serializer = PropertyType2SmallCardSerializer(filters.qs, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def largecard_type2(request):
    properties = PropertyType2.objects.filter(is_listed=True)
    filters = PropertyType2Filter(request.GET, queryset=properties)
    serializer = PropertyType2LargeCardSerializer(filters.qs, many=True)
    return Response(serializer.data)


@api_view(['PUT'])
def unlist_type2(request, property_id):
    try:
        property_instance = PropertyType2.objects.get(pk=property_id)
    except PropertyType2.DoesNotExist:
        return Response({"detail": "Property not found."}, status=status.HTTP_404_NOT_FOUND)

    property_instance.is_listed = False
    property_instance.save()

    serializer = PropertyType2Serializer(property_instance)
    return Response(serializer.data, status=status.HTTP_200_OK)

#TYPE3 VIEWS
@api_view(['POST'])
def create_type3(request):
    serializer = PropertyType3Serializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({"message": "Property Created Successfully"}, status=status.HTTP_201_CREATED)
    else:
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def getfull_type3(request):
    properties = PropertyType3.objects.filter(is_listed=True)
    filters = PropertyType3Filter(request.GET, queryset=properties)
    serializer = PropertyType3Serializer(filters.qs, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def smallcard_type3(request):
    properties = PropertyType3.objects.filter(is_listed=True)
    filters = PropertyType3Filter(request.GET, queryset=properties)
    serializer = PropertyType3SmallCardSerializer(filters.qs, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def largecard_type3(request):
    properties = PropertyType3.objects.filter(is_listed=True)
    filters = PropertyType3Filter(request.GET, queryset=properties)
    serializer = PropertyType3LargeCardSerializer(filters.qs, many=True)
    return Response(serializer.data)

@api_view(['PUT'])
def unlist_type3(request, property_id):
    try:
        property_instance = PropertyType3.objects.get(pk=property_id)
    except PropertyType3.DoesNotExist:
        return Response({"detail": "Property not found."}, status=status.HTTP_404_NOT_FOUND)

    property_instance.is_listed = False
    property_instance.save()

    serializer = PropertyType3Serializer(property_instance)
    return Response(serializer.data, status=status.HTTP_200_OK)



#CRM VIEWS

#TYPE 1
@api_view(['PUT'])
def update_crm_status_type1(request, id):
    try:
        property_instance = PropertyType1.objects.get(pk=id)
    except PropertyType1.DoesNotExist:
        return Response({"detail": "Property not found."}, status=status.HTTP_404_NOT_FOUND)

    status_data = request.data.get('status')
    crm_status, _ = CRMStatus.objects.get_or_create(property_type1=property_instance)
    crm_status.status = status_data
    crm_status.save()

    serializer = PropertyType1Serializer(property_instance)
    return Response(serializer.data, status=status.HTTP_200_OK)


#TYPE 2

@api_view(['PUT'])
def update_crm_status_type2(request, id):
    try:
        property_instance = PropertyType2.objects.get(pk=id)
    except PropertyType2.DoesNotExist:
        return Response({"detail": "Property not found."}, status=status.HTTP_404_NOT_FOUND)

    status_data = request.data.get('status')
    crm_status, _ = CRMStatus.objects.get_or_create(property_type2=property_instance)
    crm_status.status = status_data
    crm_status.save()

    serializer = PropertyType2Serializer(property_instance)
    return Response(serializer.data, status=status.HTTP_200_OK)


#TYPE 3 

@api_view(['PUT'])
def update_crm_status_type3(request, id):
    try:
        property_instance = PropertyType3.objects.get(pk=id)
    except PropertyType3.DoesNotExist:
        return Response({"detail": "Property not found."}, status=status.HTTP_404_NOT_FOUND)

    status_data = request.data.get('status')
    crm_status, _ = CRMStatus.objects.get_or_create(property_type3=property_instance)
    crm_status.status = status_data
    crm_status.save()

    serializer = PropertyType3Serializer(property_instance)
    return Response(serializer.data, status=status.HTTP_200_OK)

