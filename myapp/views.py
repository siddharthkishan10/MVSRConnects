from django.shortcuts import render

def home(request):
    return render(request, 'myapp/home.html')

def select_course(request):
    return render(request, 'myapp/select_course.html')

def project_creation(request):
    course = request.GET.get('course', '')
    return render(request, 'myapp/project_creation.html', {'course': course})

def available_faculty(request):
    return render(request, 'myapp/available_faculty.html')

def jobs_internships(request):
    return render(request, 'myapp/jobs_internships.html')

def profile(request):
    return render(request, 'myapp/profile.html')