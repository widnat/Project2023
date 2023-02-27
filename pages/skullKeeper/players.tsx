import { useState, useEffect } from "react";
import NavBar from "../../components/NavBar/NavBar";
import SkullKeeperNavBar from "../../components/skullKing/NavBar";
import Title from "../../components/skullKing/Title";
import TextInput from "../../components/skullKing/TextInput";
import { useStoreDispatch } from "../../store/hooks";
import { addPlayer } from "../../store/skullKeeper/playersSlice";
import type { Player } from "../../types/skullKeeper";

export default function SkullKeeper() {
	const [player1, setPlayer1] = useState("");
	const [player2, setPlayer2] = useState("");
	const [player3, setPlayer3] = useState("");
	const [player4, setPlayer4] = useState("");
	const [player5, setPlayer5] = useState("");
	const [player6, setPlayer6] = useState("");
	const [player7, setPlayer7] = useState("");
	const [player8, setPlayer8] = useState("");
	const dispatch = useStoreDispatch();
	const nextRoute = "/skullKeeper/round[1]";

	function handleNavigate(route: string) {
		var index = 0;
		if (player1) addPlayerDispatch(player1, index);
		if (player2 && ++index) addPlayerDispatch(player2, index);
		if (player3 && ++index) addPlayerDispatch(player3, index);
		if (player4 && ++index) addPlayerDispatch(player4, index);
		if (player5 && ++index) addPlayerDispatch(player5, index);
		if (player6 && ++index) addPlayerDispatch(player6, index);
		if (player7 && ++index) addPlayerDispatch(player7, index);
		if (player8 && ++index) addPlayerDispatch(player7, index);
	}

	function addPlayerDispatch(name: string, index: number) {
		dispatch(
			addPlayer({
				name: name,
				index: index,
			} as Player)
		);
	}

	return (
		<div>
			<NavBar />
			<Title title="Skull Keeper" page="Players" />
			<SkullKeeperNavBar
				page="Players"
				round={0}
				handleNavigate={handleNavigate}
			/>
			<form className="flex justify-center">
				<div className="flex flex-wrap justify-center -mx-3 mb-3 max-w-4xl">
					<TextInput
						header="Player 1"
						input={player1}
						handleChange={setPlayer1}
					/>
					<TextInput
						header="Player 2"
						input={player2}
						handleChange={setPlayer2}
					/>
					<TextInput
						header="Player 3"
						input={player3}
						handleChange={setPlayer3}
					/>
					<TextInput
						header="Player 4"
						input={player4}
						handleChange={setPlayer4}
					/>
					<TextInput
						header="Player 5"
						input={player5}
						handleChange={setPlayer5}
					/>
					<TextInput
						header="Player 6"
						input={player6}
						handleChange={setPlayer6}
					/>
					<TextInput
						header="Player 7"
						input={player7}
						handleChange={setPlayer7}
					/>
					<TextInput
						header="Player 8"
						input={player8}
						handleChange={setPlayer8}
					/>
				</div>
			</form>
		</div>
	);
}
