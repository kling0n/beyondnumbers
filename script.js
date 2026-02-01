document.addEventListener('DOMContentLoaded', () => {
    // Select elements
    // Select elements
    const header = document.querySelector('.site-header, .post-header');
    const posts = document.querySelectorAll('.post-item');
    const articleContent = document.querySelector('.article-content');

    // Initial State: All hidden (handled in CSS, but reinforced here if needed)

    // 1. Fade in Header
    setTimeout(() => {
        if (header) header.classList.add('visible');
    }, 100); // Slight delay after load

    // 2. Stagger in Blog Posts after the header/image are established
    // Let's say header takes 1.5s to fully settle.
    const startPostsAnimation = 1200;

    posts.forEach((post, index) => {
        setTimeout(() => {
            post.classList.add('visible');
        }, startPostsAnimation + (index * 300)); // 300ms gap between each post
    });

    // 3. Fade in article content
    if (articleContent) {
        setTimeout(() => {
            articleContent.style.opacity = '1';
            articleContent.style.transform = 'translateY(0)';
        }, 800);
    }
});
