import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Skill {
  name: string;
  level: number;
  icon: string;
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
  title = 'modern-portfolio';

  // Contact form data
  contactData: ContactData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  // Frontend skills with MEAN stack focus
  frontendSkills: Skill[] = [
    { name: 'Angular', level: 85, icon: 'fab fa-angular' },
    {name: 'React', level: 75, icon: 'fab fa-react'},
    { name: 'HTML5', level: 90, icon: 'fab fa-html5' },
    { name: 'CSS3', level: 90, icon: 'fab fa-css3-alt' },
    { name: 'TypeScript', level: 85, icon: 'fab fa-js-square' },
    { name: 'Bootstrap 5', level: 90, icon: 'fab fa-bootstrap' },
  ];

  // Backend skills including MEAN stack
  backendSkills: Skill[] = [
    { name: 'Node.js', level: 80, icon: 'fab fa-node-js' },
    { name: 'Express.js', level: 78, icon: 'fas fa-server' },
    { name: 'ASP.NET Web API', level: 85, icon: 'fas fa-code' },
    { name: 'Entity Framework', level: 85, icon: 'fas fa-database' },
    { name: 'RESTful APIs', level: 85, icon: 'fas fa-exchange-alt' }
  ];

  // Database and tools
  databaseSkills: Skill[] = [
    { name: 'MongoDB', level: 88, icon: 'fas fa-leaf' },
    { name: 'SQL Server', level: 90, icon: 'fas fa-database' },
    { name: 'Git & GitHub', level: 85, icon: 'fab fa-git-alt' },
    { name: 'Visual Studio', level: 90, icon: 'fas fa-code' },
  ];

  // Other technical skills
  otherSkills: Skill[] = [
    { name: 'C++', level: 90, icon: 'fas fa-code' },
    { name: 'Python', level: 70, icon: 'fab fa-python' },
    { name: 'OOP Concepts', level: 85, icon: 'fas fa-cube' },
    { name: 'Data Structures', level: 75, icon: 'fas fa-project-diagram' },
    { name: 'UML Diagrams', level: 80, icon: 'fas fa-sitemap' }
  ];

  // Projects with updated descriptions
  projects: Project[] = [
    {
      title: 'University Event Management System',
      description: 'A comprehensive full-stack web application built with Angular 19 and ASP.NET Web API. Features include event creation, management, student registration, real-time notifications, and admin dashboard with analytics.',
      image: './download.jpg',
      technologies: ['Angular 19', 'ASP.NET Web API', 'Entity Framework', 'SQL Server', 'Bootstrap 5'],
      DemoVideo: 'https://youtu.be/uxqLU28n_u0',
      githubUrl: '<!-- YOUR_PROJECT_GITHUB_URL -->'
    },
    {
      title: 'Book Store Web Application',
      description: 'A modern e-commerce book store developed using ASP.NET Core MVC with features like category-wise browsing, shopping cart, order management, user authentication, and comprehensive admin panel.',
      image: '/download (1).jpg',
      technologies: ['ASP.NET Core MVC', 'Entity Framework', 'SQL Server', 'Bootstrap 5', 'Identity Framework'],
      DemoVideo: 'https://youtu.be/gjO10fsJAWA',
      githubUrl: '<!-- YOUR_PROJECT_GITHUB_URL -->'
    },
    {
      title: 'Product Management Dashboard',
      description: 'A dynamic Angular 19 application for product management with complete CRUD operations, image upload functionality, search and filter capabilities, and smooth animations for enhanced user experience.',
      image: 'istockphoto-1051616786-612x612.jpg',
      technologies: ['Angular 19', 'TypeScript', 'Bootstrap 5'],
      DemoVideo: 'https://youtu.be/9ufWvPi1vM4',
      githubUrl: '<!-- YOUR_PROJECT_GITHUB_URL -->'
    },
    {
      title: 'Employee Management System',
      description: 'A full-stack CRUD application using Angular 19 frontend and ASP.NET Core Web API backend. Features employee data management, role-based access, search functionality, and responsive design.',
      image: 'download (2).jpg',
      technologies: ['Angular 19', 'ASP.NET Core API', 'Entity Framework', 'SQL Server', 'Bootstrap 5'],
      DemoVideo: 'https://youtu.be/TAUmvud3pwc',
      githubUrl: '<!-- YOUR_PROJECT_GITHUB_URL -->'
    },
    {
      title: 'Modern Portfolio Website',
      description: 'A fully responsive, modern portfolio website showcasing projects and skills. Built with Angular 19, featuring dark theme, smooth animations, and optimized performance.',
      image: 'image.png',
      technologies: ['Angular 19', 'TypeScript', 'CSS3', 'Bootstrap 5', 'Animations'],
      DemoVideo: 'Current Website',
      githubUrl: '<!-- YOUR_PORTFOLIO_GITHUB_URL -->'
    },
    {
      title: 'MEAN Stack Task Manager',
      description: 'A full-stack Task Manager application built with Angular (frontend), Node.js + Express (backend), and MongoDB. Users can create lists and manage tasks within each list.',
      image: './nTask.png',
      technologies: ['MongoDB', 'Express.js', 'Angular 19', 'Node.js'],
      DemoVideo: 'https://youtu.be/NN4sJvVV6Lg',
      githubUrl: 'https://github.com/RohanZaidy/TaskManager-MEAN-Stack-.git'
    }
  ];

  ngOnInit(): void {
    this.animateSkillBars();
    this.initializeIntersectionObserver();
  }

  ngAfterViewInit(): void {
    this.addNavbarScrollEffect();
    this.initializeTypingAnimation();
  }

  // Smooth scroll to section
  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }

  // Animate skill progress bars
  private animateSkillBars(): void {
    setTimeout(() => {
      const progressBars = document.querySelectorAll('.progress-fill');
      progressBars.forEach((bar, index) => {
        setTimeout(() => {
          const progressElement = bar as HTMLElement;
          const targetWidth = progressElement.style.width;
          progressElement.style.width = '0%';
          setTimeout(() => {
            progressElement.style.width = targetWidth;
          }, 100);
        }, index * 100);
      });
    }, 1000);
  }

  // Initialize Intersection Observer for animations
  private initializeIntersectionObserver(): void {
    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            
            // Special animation for skill bars
            if (entry.target.classList.contains('skill-card')) {
              const progressBar = entry.target.querySelector('.progress-fill') as HTMLElement;
              if (progressBar) {
                const targetWidth = progressBar.style.width;
                progressBar.style.width = '0%';
                setTimeout(() => {
                  progressBar.style.width = targetWidth;
                }, 200);
              }
            }
          }
        });
      }, observerOptions);

      // Observe all animatable elements
      setTimeout(() => {
        const elementsToObserve = document.querySelectorAll(
          '.skill-card, .project-card, .stat-card, .contact-item, .timeline-item, .about-card'
        );
        elementsToObserve.forEach(el => observer.observe(el));
      }, 100);
    }
  }

  // Add navbar scroll effect
  private addNavbarScrollEffect(): void {
    if (typeof window !== 'undefined') {
      const navbar = document.querySelector('.navbar');
      if (navbar) {
        window.addEventListener('scroll', () => {
          if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
          } else {
            navbar.classList.remove('scrolled');
          }
        });
      }
    }
  }

  // Initialize typing animation
  private initializeTypingAnimation(): void {
    if (typeof window !== 'undefined') {
      const typingElement = document.querySelector('.typing-animation');
      if (typingElement) {
        const text = 'Rohan Zaidy';
        const element = typingElement as HTMLElement;
        element.innerHTML = '';
        
        let i = 0;
        const typeWriter = () => {
          if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, 150);
          } else {
            // Add blinking cursor effect
            setTimeout(() => {
              element.style.borderRight = '3px solid var(--primary-color)';
              element.style.animation = 'blink-caret 0.75s step-end infinite';
            }, 500);
          }
        };
        
        setTimeout(typeWriter, 1000);
      }
    }
  }

  // Contact form submission
  onSubmitContact(): void {
    if (this.isContactFormValid()) {
      // Create mailto link with form data
      const subject = encodeURIComponent(this.contactData.subject);
      const body = encodeURIComponent(
        `Hello,\n\nMy name is ${this.contactData.name}.\n\n${this.contactData.message}\n\nBest regards,\n${this.contactData.name}`
      );
      const mailtoLink = `mailto:rohaanzaidy@gmail.com?subject=${subject}&body=${body}`;
      
      // Open email client
      window.location.href = mailtoLink;
      
      // Reset form
      this.resetContactForm();
      
      // Show success message
      this.showNotification('Message prepared! Your email client should open shortly.', 'success');
    } else {
      this.showNotification('Please fill in all required fields.', 'error');
    }
  }

  // Validate contact form
  private isContactFormValid(): boolean {
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

  // Reset contact form
  private resetContactForm(): void {
    this.contactData = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
  }

  // Show notification
  private showNotification(message: string, type: 'success' | 'error'): void {
    if (typeof window !== 'undefined') {
      // Create notification element
      const notification = document.createElement('div');
      notification.className = `notification notification-${type}`;
      notification.textContent = message;
      
      // Style the notification
      Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        padding: '1rem 1.5rem',
        backgroundColor: type === 'success' ? '#10b981' : '#ef4444',
        color: 'white',
        borderRadius: '8px',
        zIndex: '9999',
        opacity: '0',
        transform: 'translateX(100%)',
        transition: 'all 0.3s ease',
        fontWeight: '500',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
      });

      document.body.appendChild(notification);

      // Animate in
      setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateX(0)';
      }, 100);

      // Remove after 4 seconds
      setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
          document.body.removeChild(notification);
        }, 300);
      }, 4000);
    }
  }

  // Download resume
  downloadResume(): void {
    const link = document.createElement('a');
    link.href = '/Rohan\'sCV.pdf';
    link.download = 'Rohan_Zaidy_Resume.pdf';
    link.click();
  }

  // Get skill category total
  getSkillCategoryAverage(skills: Skill[]): number {
    if (skills.length === 0) return 0;
    const total = skills.reduce((sum, skill) => sum + skill.level, 0);
    return Math.round(total / skills.length);
  }

  // Open project demo
  openProjectDemo(demoUrl?: string): void {
    if (demoUrl && demoUrl !== 'Current Website') {
      window.open(demoUrl, '_blank');
    }
  }

  // Open GitHub repository
  openGitHub(githubUrl?: string): void {
    if (githubUrl && !githubUrl.includes('<!--')) {
      window.open(githubUrl, '_blank');
    }
  }

  // Handle navbar toggle for mobile
  toggleMobileNav(): void {
    if (typeof window !== 'undefined') {
      const navbarToggler = document.querySelector('.navbar-toggler');
      const navbarCollapse = document.querySelector('.navbar-collapse');
      
      if (navbarToggler && navbarCollapse) {
        navbarCollapse.classList.toggle('show');
      }
    }
  }

  // Close mobile nav when link is clicked
  closeMobileNav(): void {
    if (typeof window !== 'undefined') {
      const navbarCollapse = document.querySelector('.navbar-collapse');
      if (navbarCollapse && navbarCollapse.classList.contains('show')) {
        navbarCollapse.classList.remove('show');
      }
    }
  }

  // Animate numbers (for statistics)
  private animateNumbers(): void {
    if (typeof window !== 'undefined') {
      const numberElements = document.querySelectorAll('.stat-number');
      numberElements.forEach((element) => {
        const target = parseInt(element.textContent || '0');
        let current = 0;
        const increment = target / 50;
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            element.textContent = target.toString();
            clearInterval(timer);
          } else {
            element.textContent = Math.ceil(current).toString();
          }
        }, 30);
      });
    }
  }

  // Initialize all animations and effects after view init
  private initializeEffects(): void {
    setTimeout(() => {
      this.animateNumbers();
    }, 2000);
  }
}