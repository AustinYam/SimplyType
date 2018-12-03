

window.$ = document.querySelectorAll.bind(document);

let wordList = ["a", "ability", "able", "about", "above", "accept", "according", "account", "across", "act", "action", "activity", "actually", "add", "address", "administration", "admit", "adult", "affect", "after", "again", "against", "age", "agency", "agent", "ago", "agree", "agreement", "ahead", "air", "all", "allow", "almost", "alone", "along", "already", "also", "although", "always", "American", "among", "amount", "analysis", "and", "animal", "another", "answer", "any", "anyone", "anything", "appear", "apply", "approach", "area", "argue", "arm", "around", "arrive", "art", "article", "artist", "as", "ask", "assume", "at", "attack", "attention", "attorney", "audience", "author", "authority", "available", "avoid", "away", "baby", "back", "bad", "bag", "ball", "bank", "bar", "base", "be", "beat", "beautiful", "because", "become", "bed", "before", "begin", "behavior", "behind", "believe", "benefit", "best", "better", "between", "beyond", "big", "bill", "billion", "bit", "black", "blood", "blue", "board", "body", "book", "born", "both", "box", "boy", "break", "bring", "brother", "budget", "build", "building", "business", "but", "buy", "by", "call", "camera", "campaign", "can", "cancer", "candidate", "capital", "car", "card", "care", "career", "carry", "case", "catch", "cause", "cell", "center", "central", "century", "certain", "certainly", "chair", "challenge", "chance", "change", "character", "charge", "check", "child", "choice", "choose", "church", "citizen", "city", "civil", "claim", "class", "clear", "clearly", "close", "coach", "cold", "collection", "college", "color", "come", "commercial", "common", "community", "company", "compare", "computer", "concern", "condition", "conference", "Congress", "consider", "consumer", "contain", "continue", "control", "cost", "could", "country", "couple", "course", "court", "cover", "create", "crime", "cultural", "culture", "cup", "current", "customer", "cut", "dark", "data", "daughter", "day", "dead", "deal", "death", "debate", "decade", "decide", "decision", "deep", "defense", "degree", "Democrat", "democratic", "describe", "design", "despite", "detail", "determine", "develop", "development", "die", "difference", "different", "difficult", "dinner", "direction", "director", "discover", "discuss", "discussion", "disease", "do", "doctor", "dog", "door", "down", "draw", "dream", "drive", "drop", "drug", "during", "each", "early", "east", "easy", "eat", "economic", "economy", "edge", "education", "effect", "effort", "eight", "either", "election", "else", "employee", "end", "energy", "enjoy", "enough", "enter", "entire", "environment", "environmental", "especially", "establish", "even", "evening", "event", "ever", "every", "everybody", "everyone", "everything", "evidence", "exactly", "example", "executive", "exist", "expect", "experience", "expert", "explain", "eye", "face", "fact", "factor", "fail", "fall", "family", "far", "fast", "father", "fear", "federal", "feel", "feeling", "few", "field", "fight", "figure", "fill", "film", "final", "finally", "financial", "find", "fine", "finger", "finish", "fire", "firm", "first", "fish", "five", "floor", "fly", "focus", "follow", "food", "foot", "for", "force", "foreign", "forget", "form", "former", "forward", "four", "free", "friend", "from", "front", "full", "fund", "future", "game", "garden", "gas", "general", "generation", "get", "girl", "give", "glass", "go", "goal", "good", "government", "great", "green", "ground", "group", "grow", "growth", "guess", "gun", "guy", "hair", "half", "hand", "hang", "happen", "happy", "hard", "have", "he", "head", "health", "hear", "heart", "heat", "heavy", "help", "her", "here", "herself", "high", "him", "himself", "his", "history", "hit", "hold", "home", "hope", "hospital", "hot", "hotel", "hour", "house", "how", "however", "huge", "human", "hundred", "husband", "I", "idea", "identify", "if", "image", "imagine", "impact", "important", "improve", "in", "include", "including", "increase", "indeed", "indicate", "individual", "industry", "information", "inside", "instead", "institution", "interest", "interesting", "international", "interview", "into", "investment", "involve", "issue", "it", "item", "its", "itself", "job", "join", "just", "keep", "key", "kid", "kill", "kind", "kitchen", "know", "knowledge", "land", "language", "large", "last", "late", "later", "laugh", "law", "lawyer", "lay", "lead", "leader", "learn", "least", "leave", "left", "leg", "legal", "less", "let", "letter", "level", "lie", "life", "light", "like", "likely", "line", "list", "listen", "little", "live", "local", "long", "look", "lose", "loss", "lot", "love", "low", "machine", "magazine", "main", "maintain", "major", "majority", "make", "man", "manage", "management", "manager", "many", "market", "marriage", "material", "matter", "may", "maybe", "me", "mean", "measure", "media", "medical", "meet", "meeting", "member", "memory", "mention", "message", "method", "middle", "might", "military", "million", "mind", "minute", "miss", "mission", "model", "modern", "moment", "money", "month", "more", "morning", "most", "mother", "mouth", "move", "movement", "movie", "Mr", "Mrs", "much", "music", "must", "my", "myself", "name", "nation", "national", "natural", "nature", "near", "nearly", "necessary", "need", "network", "never", "new", "news", "newspaper", "next", "nice", "night", "no", "none", "nor", "north", "not", "note", "nothing", "notice", "now", "n't", "number", "occur", "of", "off", "offer", "office", "officer", "official", "often", "oh", "oil", "ok", "old", "on", "once", "one", "only", "onto", "open", "operation", "opportunity", "option", "or", "order", "organization", "other", "others", "our", "out", "outside", "over", "own", "owner", "page", "pain", "painting", "paper", "parent", "part", "participant", "particular", "particularly", "partner", "party", "pass", "past", "patient", "pattern", "pay", "peace", "people", "per", "perform", "performance", "perhaps", "period", "person", "personal", "phone", "physical", "pick", "picture", "piece", "place", "plan", "plant", "play", "player", "PM", "point", "police", "policy", "political", "politics", "poor", "popular", "population", "position", "positive", "possible", "power", "practice", "prepare", "present", "president", "pressure", "pretty", "prevent", "price", "private", "probably", "problem", "process", "produce", "product", "production", "professional", "professor", "program", "project", "property", "protect", "prove", "provide", "public", "pull", "purpose", "push", "put", "quality", "question", "quickly", "quite", "race", "radio", "raise", "range", "rate", "rather", "reach", "read", "ready", "real", "reality", "realize", "really", "reason", "receive", "recent", "recently", "recognize", "record", "red", "reduce", "reflect", "region", "relate", "relationship", "religious", "remain", "remember", "remove", "report", "represent", "Republican", "require", "research", "resource", "respond", "response", "responsibility", "rest", "result", "return", "reveal", "rich", "right", "rise", "risk", "road", "rock", "role", "room", "rule", "run", "safe", "same", "save", "say", "scene", "school", "science", "scientist", "score", "sea", "season", "seat", "second", "section", "security", "see", "seek", "seem", "sell", "send", "senior", "sense", "series", "serious", "serve", "service", "set", "seven", "several", "sex", "sexual", "shake", "share", "she", "shoot", "short", "shot", "should", "shoulder", "show", "side", "sign", "significant", "similar", "simple", "simply", "since", "sing", "single", "sister", "sit", "site", "situation", "six", "size", "skill", "skin", "small", "smile", "so", "social", "society", "soldier", "some", "somebody", "someone", "something", "sometimes", "son", "song", "soon", "sort", "sound", "source", "south", "southern", "space", "speak", "special", "specific", "speech", "spend", "sport", "spring", "staff", "stage", "stand", "standard", "star", "start", "state", "statement", "station", "stay", "step", "still", "stock", "stop", "store", "story", "strategy", "street", "strong", "structure", "student", "study", "stuff", "style", "subject", "success", "successful", "such", "suddenly", "suffer", "suggest", "summer", "support", "sure", "surface", "system", "table", "take", "talk", "task", "tax", "teach", "teacher", "team", "technology", "television", "tell", "ten", "tend", "term", "test", "than", "thank", "that", "the", "their", "them", "themselves", "then", "theory", "there", "these", "they", "thing", "think", "third", "this", "those", "though", "thought", "thousand", "threat", "three", "through", "throughout", "throw", "thus", "time", "to", "today", "together", "tonight", "too", "top", "total", "tough", "toward", "town", "trade", "traditional", "training", "travel", "treat", "treatment", "tree", "trial", "trip", "trouble", "TRUE", "truth", "try", "turn", "TV", "two", "type", "under", "understand", "unit", "until", "up", "upon", "us", "use", "usually", "value", "various", "very", "victim", "view", "violence", "visit", "voice", "vote", "wait", "walk", "wall", "want", "war", "watch", "water", "way", "we", "weapon", "wear", "week", "weight", "well", "west", "western", "what", "whatever", "when", "where", "whether", "which", "while", "white", "who", "whole", "whom", "whose", "why", "wide", "wife", "will", "win", "wind", "window", "wish", "with", "within", "without", "woman", "wonder", "word", "work", "worker", "world", "worry", "would", "write", "writer", "wrong", "yard", "yeah", "year", "yes", "yet", "you", "young", "your", "yourself"];

function shuffle(array) 
{
	let a = array.length, b, c;
	while(a)
	{
		c = Math.floor(Math.random() * a--);
		b = array[a];
		array[a] = array[c];
		array[c] = b;
	}
	return array;
}

function addWords()
{
	let wordSection =$("#word-section")[0];
	wordSection.innerHTML = "";
	$("#typebox")[0].value = "";

	for (let i = 350; i > 0; i--) 
	{
		let words = shuffle(wordList);
		let wordSpan = `<span>${words[i]}</span>`;
		wordSection.innerHTML += wordSpan;
	}

	wordSection.firstChild.classList.add("current-word");
}

//////////////////////////////////////////

// Word Colors
let colorCurrentWord =" #000000";
let colorCorrectWord = "#35a2af";
let colorIncorrectWord = "#e50000";

// Word Count and other data.
let wordData = {
	seconds: 60,
	correct: 0,
	incorrect: 0,
	total: 0,
	typed: 0
};

function checkWord(word)
{
	let wlen = word.value.length;
	let current = $(".current-word")[0];
	let currentSubstring = current.innerHTML.substring(0, wlen);
	if (word.value.trim() != currentSubstring)
	{
		current.classList.add("incorrect-word-bg");
		return false;
	}
	else
	{
		current.classList.remove("incorrect-word-bg");
		return true;
	}
}

function submitWord(word)
{
	let current = $(".current-word")[0];

	if (checkWord(word)) 
	{
		current.classList.remove("current-word");
		current.classList.add("correct-word-c");
		wordData.correct += 1;
	}
	else
	{
		current.classList.remove("current-word", "incorrect-word-bg");
		current.classList.add("incorrect-word-c");
		wordData.incorrect += 1;
	}
	wordData.total = wordData.correct + wordData.incorrect;

	current.nextSibling.classList.add("current-word");
}

function clearLine() 
{
	let wordSection = $("#word-section")[0];
	let current = $(".current-word")[0];
	let previous = current.previousSibling;
	let children = $(".correct-word-c, .incorrect-word-c").length;

	if (current.offsetTop > previous.offsetTop) 
	{
		for (let i = 0; i < children; i++) 
		{
			wordSection.removeChild(wordSection.firstChild);
		}
	}
}

function isTimer(seconds)
{
	let time = seconds;
	let one = $("#timer > span")[0].innerHTML;
	if (one == "1:00") 
	{
		let typingTimer = setInterval(() => {
			if (time <= 0) 
			{
				clearInterval(typingTimer);
			}
			else
			{
				time -= 1;
				let timePad = (time < 10) ? ("0" + time) : time;
				$("#timer > span")[0].innerHTML = `0:${timePad}`;
			}
		}, 1000);
	}
	else if (one == "0:00") 
		{
			return false;
		}
	return true;
}

function calculateWPM(data)
{
	let {seconds, correct, incorrect, total, typed} = data;
	let min = (seconds / 60);
	let wpm = Math.ceil((typed / 5) - (incorrect) / min);
	let accuracy = Math.ceil((correct / total) * 100);

	if (wpm < 0) 
		{
			wpm = 0;
		}

	let results = `<ul id="results">
		<li>WPM: <span class="wpm-value">${wpm}</span></li>
		<li>Accuracy: <span class="wpm-value">${accuracy}%</span></li>
		<li id="results-stats">
		Total Words: <span>${total}</span> |
		Correct Words: <span>${correct}</span> |
		Incorrect Words: <span>${incorrect}</span> |
		Characters Typed: <span>${typed}</span>
		</li>
		</ul>`;

	$("#word-section")[0].innerHTML = results;

	
	let wpmClass = $("li:nth-child(2) .wpm-value")[0].classList;
	if (accuracy > 80) {wpmClass.add("correct-word-c");}
	else { wpmClass.add("incorrect-word-c");}

	console.log(wordData);
}

function typingTest(e)
{
	e = e || window.event;
	let kcode = e.keyCode;
	let word = $("#typebox")[0];

	if (word.value.match(/^\s/g))
	{
		word.value = "";
	} 
	else
	{
		if (isTimer(wordData.seconds))
		{
			checkWord(word);
			if (kcode == 32)
			{
				submitWord(word);
				clearLine();
				$("#typebox")[0].value = "";
			}
			wordData.typed += 1;
		}
		else
		{
			calculateWPM(wordData);
		}
	}
}

function restartTest()
{
	$("#typebox")[0].value = "";
	location.reload();
}

