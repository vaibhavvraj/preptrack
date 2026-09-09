const canvas = document.getElementById("stars");
      const ctx = canvas.getContext("2d");
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      let stars = [];
      for (let i = 0; i < 100; i++) {
      stars.push({
         x: Math.random() * canvas.width,
         y: Math.random() * canvas.height,
         size: Math.random() * 2,
         speed: Math.random() * 0.5
      });
      }

      function drawStars() {
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "white";
      stars.forEach(star => {
         ctx.beginPath();
         ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
         ctx.fill();

         star.y += star.speed;
         if (star.y > canvas.height) star.y = 0;
      });

      requestAnimationFrame(drawStars);
      }
      drawStars();

      // Meteor effect
      function drawMeteor() {
      ctx.strokeStyle = "white";
      ctx.beginPath();
      let startX = Math.random() * canvas.width;
      let startY = Math.random() * canvas.height / 2;
      ctx.moveTo(startX, startY);
      ctx.lineTo(startX - 100, startY + 100);
      ctx.stroke();
      }
      setInterval(drawMeteor, 2000);
      