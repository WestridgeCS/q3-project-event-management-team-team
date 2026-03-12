const searchInput = document.getElementById("collegeSearch")

searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase()
  const rows = document.querySelectorAll("tbody tr")

  rows.forEach(row => {
    const name = row.dataset.name

    if (name.includes(query)) {
      row.style.display = ""
    } else {
      row.style.display = "none"
    }
  })
})
