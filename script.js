const graphs = [
    { 
        image: "assests/songDuration.png", 
        link: "https://www.kaggle.com/example1",
        description: "This graph represents the trend of sales over the past five years, showing a steady increase in revenue due to better marketing strategies and improved product quality. The highest peak was recorded in 2023, indicating significant growth in customer engagement."
    },
    { 
        image: "assests/ViewsVsLikes.png", 
        link: "https://www.kaggle.com/example2",
        description: "This chart illustrates the correlation between temperature and ice cream sales during summer months. As the temperature rises, the demand for ice cream follows a linear trend upwards, making it a perfect example of seasonal business dependency."
    },
    { 
        image: "assests/views.png", 
        link: "https://www.kaggle.com/example3",
        description: "A bar chart displaying the top 10 most popular programming languages based on survey data. Python leads the rankings, followed closely by JavaScript and Java. These trends are influenced by industry needs and the rise of data science and web development."
    },
    { 
        image: "assests/DanceabilityprGenre.png", 
        link: "https://www.kaggle.com/example3",
        description: "A bar chart displaying the top 10 most popular programming languages based on survey data. Python leads the rankings, followed closely by JavaScript and Java. These trends are influenced by industry needs and the rise of data science and web development."
    },
    { 
        image: "assests/EnergyLevel.png", 
        link: "https://www.kaggle.com/example3",
        description: "A bar chart displaying the top 10 most popular programming languages based on survey data. Python leads the rankings, followed closely by JavaScript and Java. These trends are influenced by industry needs and the rise of data science and web development."
    },
    { 
        image: "assests/DuratnViews.png",

        link: "https://www.kaggle.com/example3",
        description: "A bar chart displaying the top 10 most popular programming languages based on survey data. Python leads the rankings, followed closely by JavaScript and Java. These trends are influenced by industry needs and the rise of data science and web development."
    },
    { 
        image: "assests/g2.png", 
        link: "https://www.kaggle.com/example3",
        description: "A bar chart displaying the top 10 most popular programming languages based on survey data. Python leads the rankings, followed closely by JavaScript and Java. These trends are influenced by industry needs and the rise of data science and web development."
    },
    { 
        image: "assests/DurabilityVsDance.png", 
        link: "https://www.kaggle.com/example3",
        description: "A bar chart displaying the top 10 most popular programming languages based on survey data. Python leads the rankings, followed closely by JavaScript and Java. These trends are influenced by industry needs and the rise of data science and web development."
    }
];

const dashboard = document.getElementById("dashboard");

graphs.forEach(graph => {
    const card = document.createElement("div");
    card.classList.add("card", "p-3", "text-center");

    const shortText = graph.description.substring(0, 100) + "...";
    const fullText = graph.description;

    card.innerHTML = `
        <img src="${graph.image}" alt="Graph">
        <p class="mt-2">
            <strong>Explanation:</strong> 
            <span class="short-text">${shortText}</span>
            <span class="full-text" style="display: none;">${fullText}</span>
            <span class="read-more">Read More</span>
        </p>
        <a href="${graph.link}" target="_blank" class="btn btn-custom mt-2">View on Kaggle</a>
    `;

    const readMore = card.querySelector(".read-more");
    const shortTextElement = card.querySelector(".short-text");
    const fullTextElement = card.querySelector(".full-text");

    readMore.addEventListener("click", () => {
        if (fullTextElement.style.display === "none") {
            fullTextElement.style.display = "inline";
            shortTextElement.style.display = "none";
            readMore.textContent = "Read Less";
        } else {
            fullTextElement.style.display = "none";
            shortTextElement.style.display = "inline";
            readMore.textContent = "Read More";
        }
    });

    dashboard.appendChild(card);
});
