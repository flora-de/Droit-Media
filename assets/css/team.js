document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const teamMembers = document.querySelectorAll('.team-member');
  const loadMoreButton = document.getElementById('load-more');
  let visibleMembers = 4; // Initial number of visible members

  // Function to show team members based on the visible count
  function showMembers() {
      teamMembers.forEach((member, index) => {
          if (index < visibleMembers) {
              member.style.display = 'block';
          } else {
              member.style.display = 'none';
          }
      });
  }

  // Initial call to show members
  showMembers();

  // Event listener for filter buttons
  filterButtons.forEach(button => {
      button.addEventListener('click', () => {
          filterButtons.forEach(btn => btn.classList.remove('active'));
          button.classList.add('active');

          const filter = button.getAttribute('data-filter');
          visibleMembers = 4; // Reset visible members count

          teamMembers.forEach(member => {
              if (filter === 'all' || member.getAttribute('data-category') === filter) {
                  member.style.display = 'block';
              } else {
                  member.style.display = 'none';
              }
          });

          showMembers();
      });
  });

  // Event listener for load more button
  loadMoreButton.addEventListener('click', () => {
      visibleMembers += 4; // Increase visible members count by 4
      showMembers();

      // Hide load more button if all members are visible
      if (visibleMembers >= teamMembers.length) {
          loadMoreButton.style.display = 'none';
      }
  });
});
