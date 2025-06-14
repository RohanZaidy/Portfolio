import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Skill {
  name: string;
  level: number;
}

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  DemoVideo?: string;
  githubUrl?: string;
}

interface ContactData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'portfolio';

  // Contact form data
  contactData: ContactData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  // Frontend skills - Update these with your actual skill levels
  frontendSkills: Skill[] = [
    { name: 'Angular 19', level: 85 },
    { name: 'HTML5', level: 90 },
    { name: 'CSS', level: 90 },
    { name: 'JavaScript', level: 80 },
    { name: 'TypeScript', level: 80 },
    { name: 'Bootstrap', level: 85 },
    { name: 'Responsive Design', level: 90 }
  ];

  // Backend skills - Update these with your actual skill levels
  backendSkills: Skill[] = [
    { name: 'ASP.NET Web API', level: 85 },
    { name: 'C#', level: 90 },
    { name: 'Entity Framework', level: 90 },
    { name: 'SQL Server', level: 90 },
    { name: 'RESTful APIs', level: 80 },
    { name: 'Identity Framework', level: 40 },
    { name: 'ASP.NET MVC', level: 80 }
  ];

  OtherSkills: Skill[] = [
    { name: 'C++', level: 90 },
    { name: 'OOP', level: 85 },
    { name: 'DSA', level: 70 },
    { name: 'DataBase', level: 80 },
    { name: 'C# Desktop Development', level: 60 },
    { name: 'Python with TkInter', level: 70 },
    { name: 'UML Diagrams', level: 80 },
    { name: 'MS Office', level: 80 }
  ];

  SoftSkills: Skill[] = [
    { name: 'Comunication skills', level: 75 },
    { name: 'Team Colaboration', level: 80 },
    { name: 'Time Management', level: 85 },
    { name: 'Project Mangement', level: 85 },
    { name: 'MultiTasking', level: 80 }
  ];

  // Projects - Update these with your actual projects
  projects: Project[] = [
    {
      title: 'University Event Management System',
      description: 'A full-stack web application built with Angular 19 and ASP.NET Web API that allows university admins to create and manage events, while students can view details and register. The system includes features like event scheduling, registration, with a clean and responsive user interface.',
      image: '/download.jpg',
      technologies: ['Angular 19', 'ASP.NET Web API', 'Entity Framework', 'SQL Server', 'Bootstrap'],
      DemoVideo: 'https://youtu.be/uxqLU28n_u0',
      githubUrl: '<!-- YOUR_PROJECT_GITHUB_URL -->'
    },
    {
      title: 'Book Store web App',
      description: 'A full-featured Book Store web application developed using ASP.NET Core MVC, allowing users to browse books by category, view details, add to cart, and manage purchases through an admin panel.',
      image: '/download (1).jpg',
      technologies: ['ASP.net corMVC', 'Entity Framework', 'SQL Server', 'Bootstrap'],
      DemoVideo: 'https://youtu.be/gjO10fsJAWA',
      githubUrl: '<!-- YOUR_PROJECT_GITHUB_URL -->'
    },
    {
      title: 'Product Management Dashboard',
      description: 'A responsive Product Management Dashboard developed using Angular 19, designed to manage products with full CRUD functionality. The project includes smooth animations for UI transitions and handles image upload, preview, and display for each product. Built as a practice project to strengthen frontend development skills and improve user experience with dynamic visuals.',
      image: 'istockphoto-1051616786-612x612.jpg',
      technologies: ['Angular', 'TypeScript', 'Bootstrap', 'HTML5', 'CSS3'],
      DemoVideo: 'https://youtu.be/9ufWvPi1vM4',
      githubUrl: '<!-- YOUR_PROJECT_GITHUB_URL -->'
    },
    {
      title: 'Employee Management System',
      description: 'A system made with asp api and angular 19 for oerforming CRUD operations on employee data. It includes features like adding, updating, deleting, and viewing employee details with a user-friendly interface.',
      image: 'download (2).jpg',
      technologies: ['Angular', 'ASP.NET Core api', 'Entity Framework', 'Bootstrap'],
      DemoVideo: 'https://youtu.be/TAUmvud3pwc',
      githubUrl: '<!-- YOUR_PROJECT_GITHUB_URL -->'
    },
    {
      title: 'Portfolio Website',
      description: 'This responsive portfolio website showcasing my skills, projects, and experience. Built with Angular 19 and modern CSS animations.',
      image: 'image.png',
      technologies: ['Angular 19', 'TypeScript', 'CSS3', 'Bootstrap', 'Animations'],
      DemoVideo: 'This website',
      githubUrl: '<!-- YOUR_PORTFOLIO_GITHUB_URL -->'
    }
  ];

  ngOnInit(): void {
    // Initialize component
    this.animateSkillBars();
  }

  // Smooth scroll to section
  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80; // Account for fixed navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }

  // Animate skill bars on scroll
  private animateSkillBars(): void {
    const observerOptions = {
      threshold: 0.5,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const progressBars = entry.target.querySelectorAll('.progress-bar');
          progressBars.forEach((bar: any) => {
            const width = bar.style.width;
            bar.style.width = '0%';
            setTimeout(() => {
              bar.style.width = width;
            }, 100);
          });
        }
      });
    }, observerOptions);

    // Wait for DOM to be ready
    setTimeout(() => {
      const skillsSection = document.getElementById('skills');
      if (skillsSection) {
        observer.observe(skillsSection);
      }
    }, 1000);
  }

  // Handle contact form submission
  onSubmit(): void {
    if (this.isFormValid()) {
      // Here you would typically send the data to your backend API
      console.log('Contact form submitted:', this.contactData);
      
      // For demo purposes, show an alert
      alert('Thank you for your message! I will get back to you soon.');
      
      // Reset form
      this.contactData = {
        name: '',
        email: '',
        subject: '',
        message: ''
      };
    } else {
      alert('Please fill in all required fields.');
    }
  }

  // Validate contact form
  private isFormValid(): boolean {
    return !!(
      this.contactData.name.trim() &&
      this.contactData.email.trim() &&
      this.contactData.subject.trim() &&
      this.contactData.message.trim() &&
      this.isValidEmail(this.contactData.email)
    );
  }

  // Email validation
  private isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Download resume (placeholder function)
  downloadResume(): void {
    // In a real application, this would download your actual resume file
    console.log('Download resume clicked');
    alert('Resume download functionality');
  }

  // Get current year for footer
  getCurrentYear(): number {
    return new Date().getFullYear();
  }

  // Handle navigation menu toggle on mobile
  toggleMobileMenu(): void {
    const navbarToggler = document.querySelector('.navbar-toggler') as HTMLElement;
    const navbarCollapse = document.querySelector('.navbar-collapse') as HTMLElement;
    
    if (navbarToggler && navbarCollapse) {
      navbarCollapse.classList.toggle('show');
    }
  }

  // Close mobile menu when clicking on nav links
  closeMobileMenu(): void {
    const navbarCollapse = document.querySelector('.navbar-collapse') as HTMLElement;
    if (navbarCollapse && navbarCollapse.classList.contains('show')) {
      navbarCollapse.classList.remove('show');
    }
  }

  // Add scroll effect to navbar
  private addNavbarScrollEffect(): void {
    window.addEventListener('scroll', () => {
      const navbar = document.querySelector('.navbar') as HTMLElement;
      if (navbar) {
        if (window.scrollY > 50) {
          navbar.style.background = 'rgba(0, 0, 0, 0.95)';
        } else {
          navbar.style.background = 'rgba(0, 0, 0, 0.9)';
        }
      }
    });
  }

  // Initialize scroll effects
  ngAfterViewInit(): void {
    this.addNavbarScrollEffect();
  }
}