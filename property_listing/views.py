from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import PropertyType1Serializer, PropertyType1LargeCardSerializer, PropertyType1SmallCardSerializer
from .serializers import PropertyType2Serializer, PropertyType2LargeCardSerializer, PropertyType2SmallCardSerializer
from .models import PropertyType1,PropertyType2
from rest_framework import status

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
    serializer = PropertyType1Serializer(properties, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def smallcard_type1(request):
    properties = PropertyType1.objects.filter(is_listed=True)
    serializer =  PropertyType1SmallCardSerializer(properties, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def largecard_type1(request):
    properties = PropertyType1.objects.filter(is_listed=True)
    serializer =  PropertyType1LargeCardSerializer(properties, many=True)
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
    serializer = PropertyType2Serializer(properties, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def smallcard_type2(request):
    properties = PropertyType2.objects.filter(is_listed=True)
    serializer =  PropertyType2SmallCardSerializer(properties, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def largecard_type2(request):
    properties = PropertyType2.objects.filter(is_listed=True)
    serializer =  PropertyType2LargeCardSerializer(properties, many=True)
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