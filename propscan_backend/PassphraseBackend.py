from django.contrib.auth.backends import BaseBackend
from django.contrib.auth.models import User

class PassphraseBackend(BaseBackend):
    def authenticate(self, request, passphrase=None):
        # Compare the provided passphrase with your secret passphrase
        if passphrase == "propscan":
            # Return a user object to indicate successful authentication
            return User.objects.first()

    def get_user(self, user_id):
        # Retrieve the user object based on the user_id
        return User.objects.get(pk=user_id)

# from django.contrib.auth.backends import BaseBackend

# class PassphraseBackend(BaseBackend):
#     def authenticate(self, request, passphrase=None):
#         # Check if the provided passphrase matches the expected value
#         expected_passphrase = "propscangg"  # Replace with your actual secret passphrase
#         if passphrase == expected_passphrase:
#             return True  # Authentication success
#         else:
#             return False  # Authentication failed


# from django.contrib.auth.models import AnonymousUser
# from rest_framework_simplejwt.authentication import JWTAuthentication

# class TokenAuthenticationMiddleware:
#     def __init__(self, get_response):
#         self.get_response = get_response

#     def __call__(self, request):
#         user = AnonymousUser()
#         auth_header = request.META.get('HTTP_AUTHORIZATION', '')
#         if auth_header.startswith('Bearer'):
#             token = auth_header.split(' ')[1]
#             try:
#                 user, _ = JWTAuthentication().authenticate_credentials(token)
#             except:
#                 pass

#         request.user = user
#         response = self.get_response(request)
#         return response

# # """
# # File in which we have the middleware for Django for Authenticating API requests
# # """
# # import json
# # import jwt
# # import logging

# # from django.http import HttpResponse
# # from django.utils.deprecation import MiddlewareMixin

# # # Initialize logger
# # logger = logging.getLogger(__name__)

# # # Get JWT secret key
# # env = Env()
# # env.read_env()
# # SECRET_KEY = env("JWT_SECRET_KEY")


# # def create_response(request_id, code, message):

# #     """
# #     Function to create a response to be sent back via the API
# #     :param request_id:Id fo the request
# #     :param code:Error Code to be used
# #     :param message:Message to be sent via the APi
# #     :return:Dict with the above given params
# #     """

# #     try:
# #         req = str(request_id)
# #         data = {"data": message, "code": int(code), "request_id": req}
# #         return data
# #     except Exception as creation_error:
# #         logger.error(f'create_response:{creation_error}')


# # class CustomMiddleware(MiddlewareMixin):

# #     """
# #     Custom Middleware Class to process a request before it reached the endpoint
# #     """

# #     def process_request(self, request):

# #         """
# #         Custom middleware handler to check authentication for a user with JWT authentication
# #         :param request: Request header containing authorization tokens
# #         :type request: Django Request Object
# #         :return: HTTP Response if authorization fails, else None
# #         """

# #         jwt_token = request.headers.get('authorization', None)
# #         logger.info(f"request received for endpoint {str(request.path)}")

# #         # If token Exists
# #         if jwt_token:
# #             try:
# #                 payload = jwt.decode(jwt_token, SECRET_KEY, algorithms=['HS256'])
# #                 userid = payload['user_id']
# #                 company_id = payload['company_id'] if 'company_id' in payload else None
# #                 logger.info(f"Request received from user - {userid}, company - {company_id}")
# #                 return None
# #             except jwt.ExpiredSignatureError:
# #                 response = create_response("", 4001, {"message": "Authentication token has expired"})
# #                 logger.info(f"Response {response}")
# #                 return HttpResponse(json.dumps(response), status=401)
# #             except (jwt.DecodeError, jwt.InvalidTokenError):
# #                 response = create_response("", 4001, {"message": "Authorization has failed, Please send valid token."})
# #                 logger.info(f"Response {response}")
# #                 return HttpResponse(json.dumps(response), status=401)
# #         else:
# #             response = create_response(
# #                 "", 4001, {"message": "Authorization not found, Please send valid token in headers"}
# #             )
# #             logger.info(f"Response {response}")
# #             return HttpResponse(json.dumps(response), status=401)