from django.contrib.auth.models import AnonymousUser
from rest_framework_simplejwt.authentication import JWTAuthentication

class TokenAuthenticationMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        user = AnonymousUser()
        auth_header = request.META.get('HTTP_AUTHORIZATION', '')
        if auth_header.startswith('Bearer'):
            token = auth_header.split(' ')[1]
            try:
                user, _ = JWTAuthentication().authenticate_credentials(token)
            except:
                pass

        request.user = user
        response = self.get_response(request)
        return response
