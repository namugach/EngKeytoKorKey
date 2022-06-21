let vKeyboard = {
	functionKeyState: {
		capslock: false,
		shift: false,
		ctrl: false,
		alt: false
	},
	colors: {
		default: "#f5f5f5",
		select: "#0f0f0f6b"
	},
	keysInfo: [
		[
			["Backquote", "~", "`"], ["Digit1", "!", 1], ["Digit2", "@", 2], 
			["Digit3", "#", 3], ["Digit4", "$", 4], ["Digit5", "%", 5], 
			["Digit6", "^", 6], ["Digit7", "&", 7], ["Digit8", "*", 8], 
			["Digit9", "(", 9], ["Digit0", ")", 9], ["Minus", "_", "-"], 
			["Equal", "+", "="], ["Backslash", "|", "\\"], ["Backspace", "<-", ""]
		],
		[
			["Tab", "tap"], ["KeyQ", "Q", "ㅃ", "ㅂ"], ["KeyW", "W", "ㅉ", "ㅈ"],
			["KeyE", "E", "ㄸ", "ㄷ"], ["KeyR", "R", "ㄲ", "ㄱ"], ["KeyT", "T", "ㅆ", "ㅅ"],
			["KeyY", "Y", "ㅛ"], ["KeyU", "U", "ㅕ"], ["KeyI", "I", "ㅑ"],
			["KeyO", "O", "ㅒ", "ㅐ"], ["KeyP", "P", "ㅖ", "ㅔ"], ["BracketLeft", "{", "["],
			["BracketRight", "}", "]"],
		],
		[
			["CapsLock", "Caps"], ["KeyA", "A", "ㅁ"], ["KeyS", "S", "ㄴ"],
			["KeyD", "D", "ㅇ"], ["KeyF", "F", "ㄹ"], ["KeyG", "G", "ㅎ"],
			["KeyH", "H", "ㅗ"], ["KeyJ", "J", "ㅓ"], ["KeyK", "K", "ㅏ"],
			["KeyL", "L", "ㅣ"], ["Semicolon", ":", ";"], ["Quote", `"`, "'"],
			["Enter", "Enter"]
		],
		[
			["ShiftLeft", "Shift"], ["KeyZ", "Z", "ㅋ"], ["KeyX", "X", "ㅌ"],
			["KeyC", "C", "ㅊ"], ["KeyV", "V", "ㅍ"], ["KeyB", "B", "ㅠ"],
			["KeyN", "N", "ㅜ"], ["KeyM", "M", "ㅡ"], ["Comma", "<", ","],
			["Period", ">", "."], ["Slash", "?", "/"], ["ShiftRight", "shift"]
		],
		[
			["ControlLeft", "Ctrl"], ["AltLeft", "Alt"],
			["Space", ""], ["AltRight", "Alt"], ["ControlRight", "Ctrl"]
		]
	],
	keyCapData: [
		[
			["`", "~"], ["1", "!"], ["2", "@"], ["3", "#"], 
			["4", "$"], ["5", "%"], ["6", "^"], ["7", "&"], 
			["8", "*"], ["9", "("], ["0", ")"], ["-", "_"], 
			["=", "+"], ["\\", "|"], ["backspace"]
		],
		[
			["	", "	"], ["q", "Q"], ["w", "W"], ["e", "E"], 
			["r", "R"], ["t", "T"], ["y", "Y"], ["u", "U"], 
			["i", "I"], ["o", "O"], ["p", "P"], ["[", "{"], 
			["]", "}"]
		],
		[
			["capsLock"], ["a", "A"], ["s", "S"], ["d", "D"], 
			["f", "F"], ["g", "G"], ["h", "H"], ["j", "J"], 
			["k", "K"], ["l", "L"], [";", ":"], ["'", `"`], 
			["\n"]
		],
		[
			["shift"], ["z", "Z"], ["x", "X"], ["c", "C"], 
			["v", "V"], ["b", "B"], ["n", "N"], ["m", "M"], 
			[",", "<"], [".", ">"], ["/", "?"], ["shift"], 
		],
		[
			["ctrl"], ["alt"], [" "], ["ctrl"], ["alt"]
		]
	],
	createElement(type) {
		return document.createElement(type);
	},
	keyParts(content) {
		let keyPartsElem = this.createElement("div"),
		style = keyPartsElem.style;
		style.display = "flex";
    style.justifyContent = "center";
    style.alignContent = "center";
		keyPartsElem.textContent = content;
		return keyPartsElem;
	},
	keyCap() {
		let keyCap = this.createElement("div"),
		style = keyCap.style;
		style.width = "100%";
		style.height = "100%";
		style.position = "absolute";
		keyCap.className = "keyCap";
		return keyCap;
	},
	/**
	 * @param {{
	 * 	id: string,
	 * 	tLaft: string|number,
	 * 	tRight: string|number
	 * 	bLaft: string|number,
	 * 	bRight: string|number
	 * }} props 
	 * @returns 
	 */
	key(props = {}) {
		let {id, tLaft, tRight, bLaft, bRight} = props,
		keyElem = this.createElement("div"),
		style = keyElem.style;
		style.backgroundColor = this.colors.default;
		style.position = "relative";
		style.display = "grid";
		style.gridTemplateColumns = "1fr 1fr";
		style.gridTemplateRows = "1fr 1fr";
		keyElem.id = id;
		keyElem.className = "key";
		keyElem.appendChild(this.keyParts(tLaft));
		keyElem.appendChild(this.keyParts(tRight));
		keyElem.appendChild(this.keyParts(bLaft));
		keyElem.appendChild(this.keyParts(bRight));
		keyElem.appendChild(this.keyCap());
		return keyElem;
	},
	twoTypeKey(id, tLaft, bRight) {
		return this.key({id, tLaft, bRight});
	},
	threeTypeKey(id, tLaft, tRight, bRight) {
		return this.key({id, tLaft, tRight, bRight});
	},
	keyLine(columnCount = "1fr") {
		let keyLineElem = this.createElement("div"),
		style = keyLineElem.style;
		style.backgroundColor = "#aaa";
		style.display = "grid";
		style.gridTemplateColumns = columnCount;
		style.gridTemplateRows = "1fr";
		style.gridGap = "2px";
		return keyLineElem;
	},
	frame() {
		let frameElem = this.createElement("div"),
		style = frameElem.style;
		style.backgroundColor = "#c9c9c9";
		style.width = "574px";
		// style.height = "192px";
		style.margin = "auto"
		style.display = "grid";
		style.gridTemplateColumns = "1fr";
		style.gridTemplateRows = "1fr 1fr 1fr 1fr 1fr";
		style.gridGap = "5px";
		style.padding = "10px";
		return frameElem;
	},
	setKeyLineKeys(keyLine, keysInfo) {
		for(let i=0; i<keysInfo.length; i++) {
			if(3 < keysInfo[i].length) {
				keyLine.appendChild(
					this.threeTypeKey(keysInfo[i][0], keysInfo[i][1], keysInfo[i][2], keysInfo[i][3])
				);
			}
			else {
				keyLine.appendChild(
					this.twoTypeKey(keysInfo[i][0], keysInfo[i][1], keysInfo[i][2])
				);
			}
		}
	},
	keyboard() {
		let keyboardElem = this.createElement("div"),
		frame = this.frame(), keyLines = [
			this.keyLine("repeat(15, 1fr)"),
			this.keyLine("1.2fr repeat(12, 1fr)"),
			this.keyLine("1.4fr repeat(11, 1fr) 1.4fr"),
			this.keyLine("1.5fr repeat(10, 1fr) 1.5fr"),
			this.keyLine("repeat(2, 1fr) 5fr repeat(2, 1fr)")
		];
		for(let i=0; i<keyLines.length; i++) {
			this.setKeyLineKeys(keyLines[i], this.keysInfo[i]);
			frame.appendChild(keyLines[i]);
		}
		keyboardElem.id = "keyboard";
		keyboardElem.appendChild(frame);
		return keyboardElem;
	},
	event: {
		typeing() {
			let here = vKeyboard, keysArr = Array.from(document.getElementsByClassName("key")),
			keysMap = new Map();
			keysArr.forEach(keyElem => keysMap.set(keyElem.id, keyElem));
			try {
				window.addEventListener("keydown", e => {
					keysMap.get(e.code).style.backgroundColor = here.colors.select;
					if(e.key === "Shift") { here.functionKeyState.shift = false; }
				});
				window.addEventListener("keyup", e => {
					keysMap.get(e.code).style.backgroundColor = here.colors.default;
				});
			}
			catch {}
			
		},
		click() {
			let here = vKeyboard,
			keysCaps = Array.from(document.getElementsByClassName("keyCap"));
			keyCapData = here.keyCapData.flat();
			keysCaps.forEach((keyCap, i) => {
				keyCap.keyCapData = keyCapData[i];
			});
			let keyUpEvent = new Event("keyup"),
			shiftElem = null;
			keyboard.addEventListener("click", e => {
				if(e.target.className !== "keyCap") return;
				switch(e.target.keyCapData[0]) {
					case "capsLock": case "ctrl":case "alt": break;
					case "backspace":
						txtSource.value = txtSource.value.substr(0, txtSource.value.length-1);
					break;
					case "shift":
						here.functionKeyState.shift = !here.functionKeyState.shift;
						shiftElem = e.target.parentElement;
						shiftElem.style.backgroundColor = here.functionKeyState.shift 
						? here.colors.select : here.colors.default;
						
					break;
					default:
						txtSource.value += here.functionKeyState.shift 
						? e.target.keyCapData[1] : e.target.keyCapData[0];
						if(here.functionKeyState.shift) {
							here.functionKeyState.shift = false;
							shiftElem.style.backgroundColor = here.colors.default;
						}
				}
				txtSource.dispatchEvent(new Event("keyup"));
			});
		}
	},
	main() {
		app.appendChild(this.keyboard());
		this.event.typeing();
		this.event.click();
		
	}
}

vKeyboard.main();

