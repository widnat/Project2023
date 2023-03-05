import React from "react";
import NavBtn from "./NavBtn";

type Props = {
	page: string;
	round: number;
	handleNavigate: any;
};

export default function NavBar({ page, round, handleNavigate }: Props) {
	return (
		<nav>
			<div className="mx-auto px-2 mb-2 sm:px-6 lg:px-8">
				<div className="flex h-12 items-center justify-center">
					<div className="flex space-x-4">
						{page === "Players" && (
							<NavBtn
								route="next"
								text="Start Game"
								handleNavigate={handleNavigate}
							/>
						)}
						{page !== "Players" && (
							<NavBtn
								route="players"
								text="Players"
								handleNavigate={handleNavigate}
							/>
						)}
						{page !== "Players" && page !== "Round 1" && (
							<NavBtn
								route="previous"
								text={"Round " + String(round - 1)}
								handleNavigate={handleNavigate}
							/>
						)}
						{page !== "Players" &&
							page !== "Round 10" &&
							page !== "Results" && (
								<NavBtn
									route="next"
									text={"Round " + String(round + 1)}
									handleNavigate={handleNavigate}
								/>
							)}
						{page === "Round 10" && (
							<NavBtn
								route="results"
								text="Results"
								handleNavigate={handleNavigate}
							/>
						)}
						{page === "Results" && (
							<NavBtn
								route="new game"
								text="New Game"
								handleNavigate={handleNavigate}
							/>
						)}
					</div>
				</div>
			</div>
		</nav>
	);
}
