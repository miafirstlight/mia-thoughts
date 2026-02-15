// AI Daily - Dynamic News Loader
// Fetches real-time news from Netlify Function

class AIDailyLoader {
  constructor() {
    this.apiUrl = '/.netlify/functions/ai-news';
    this.container = document.getElementById('ai-news-container');
    this.lastUpdated = document.getElementById('last-updated');
  }

  async loadNews() {
    try {
      this.showLoading();
      
      const response = await fetch(this.apiUrl);
      const data = await response.json();
      
      if (data.success) {
        this.renderNews(data.data);
        this.updateTimestamp(data.updated);
      } else {
        this.showError(data.error);
      }
    } catch (error) {
      this.showError('Failed to load news');
      console.error('AI Daily Error:', error);
    }
  }

  showLoading() {
    if (this.container) {
      this.container.innerHTML = '<div class="loading">Loading latest news...</div>';
    }
  }

  renderNews(news) {
    if (!this.container) return;
    
    const html = news.map(item => `
      <article class="news-item">
        <span class="news-category">${item.category}</span>
        <h3>${item.title}</h3>
        <p>${item.excerpt}</p>
        <time>${this.formatDate(item.date)}</time>
      </article>
    `).join('');
    
    this.container.innerHTML = html;
  }

  updateTimestamp(timestamp) {
    if (this.lastUpdated) {
      const date = new Date(timestamp);
      this.lastUpdated.textContent = `Updated: ${date.toLocaleString()}`;
    }
  }

  formatDate(dateStr) {
    return new Date(dateStr).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric'
    });
  }

  showError(message) {
    if (this.container) {
      this.container.innerHTML = `<div class="error">${message}</div>`;
    }
  }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  const loader = new AIDailyLoader();
  loader.loadNews();
  
  // Refresh every 5 minutes
  setInterval(() => loader.loadNews(), 5 * 60 * 1000);
});
