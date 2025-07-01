fetch("registry.json")
  .then(res => res.json())
  .then(data => {
    const results = document.getElementById("results");
    const input = document.getElementById("search");

    function renderList(filter = "") {
      results.innerHTML = "";
      const filtered = data.filter(site =>
        site.domain.toLowerCase().includes(filter.toLowerCase())
      );
      filtered.forEach(site => {
        const li = document.createElement("li");
        li.innerHTML = `
          <strong>${site.domain}</strong>
          ${site.description ? `<div>${site.description}</div>` : ""}
          ${site.link ? `<a href="${site.link}" target="_blank">Source</a>` : ""}
        `;
        results.appendChild(li);
      });
    }

    input.addEventListener("input", () => {
      renderList(input.value);
    });

    renderList();
  });
