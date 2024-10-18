		const genreMapping = {
		    '音楽にすききらいは無い': 'All',
		    '力強い曲がすきだ': 'Powerful',
		    'ゆったりした曲がすきだ': 'Relaxing',
		    '感情的な曲がすきだ': 'Emotional',
		    'ノれる曲が好きだ': 'Rhythmic'
		};
		
		function setGenre(choice) {
		    const selectedGenre = genreMapping[choice] || 'All';  // よくわからない場合は 'All'
		    localStorage.setItem('selectedGenre', selectedGenre);  // 選択されたジャンルを保存
		}

        const keyImage = document.getElementById('keyImage');
        const modal = document.getElementById('passwordModal');
        const closeModal = document.querySelector('.close');
        const submitButton = document.getElementById('submitPassword');
        const passwordInput = document.getElementById('passwordInput');
        const message = document.getElementById('message');

        const correctPassword = "あいらぶずんば"; // 正しいパスワード

        keyImage.onclick = function() {
            modal.style.display = "block";
            message.textContent = ""; // メッセージをリセット
        }

        closeModal.onclick = function() {
            modal.style.display = "none";
            message.textContent = ""; // メッセージをリセット
        }

        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
                message.textContent = ""; // メッセージをリセット
            }
        }

		submitButton.onclick = function() {
		    if (passwordInput.value === correctPassword) {
		        window.location.href = "MySongsCategory.html?access=true";
		    } else {
		        message.textContent = "ちがうよ";
		    }
		}

		setTimeout(() => {
		    const section = document.querySelector('section');
		    section.style.animation = 'moveUp 1s forwards'; // アニメーションを開始
		},12000); // 12秒後に実行

	    // 12秒後に画像を表示
	    setTimeout(() => {
	        document.querySelector('.image').style.opacity = 1;
	    }, 13000);
