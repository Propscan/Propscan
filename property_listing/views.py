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


def location_page(request):
    return render(request, 'location.html')
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