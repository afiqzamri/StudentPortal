// Toggle Sidebar
document.getElementById('menu-toggle').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('sidebar').classList.toggle('active');
    document.getElementById('content').classList.toggle('active');
});

// Close sidebar on mobile when clicking outside
document.addEventListener('click', function(e) {
    const sidebar = document.getElementById('sidebar');
    const toggle = document.getElementById('menu-toggle');
    
    if (window.innerWidth <= 768) {
        if (!sidebar.contains(e.target) && !toggle.contains(e.target) && !sidebar.classList.contains('active')) {
            sidebar.classList.add('active');
            document.getElementById('content').classList.add('active');
        }
    }
});

// Responsive sidebar behavior
window.addEventListener('resize', function() {
    const sidebar = document.getElementById('sidebar');
    const content = document.getElementById('content');
    
    if (window.innerWidth > 768) {
        sidebar.classList.remove('active');
        content.classList.remove('active');
    } else {
        sidebar.classList.add('active');
        content.classList.add('active');
    }
});

// add active class to sidebar based on clicked link
const sidebarLinks = document.querySelectorAll('#sidebar .components li a');

sidebarLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        // Remove active class from all links
        sidebarLinks.forEach(link => {
            link.parentElement.classList.remove('active');
        });

        // Add active class to the clicked link
        this.parentElement.classList.add('active');
    });
});