import React from "react";
import Button from "../button/button.components";
import InputComponent from "../input/input.component";

import {
	Container,
	SearchIcon,
	ButtonContainer,
	FilterIcon,
} from "./search-filter.styles";

const SearchFilter: React.FC = () => {
	return (
		<Container>
			<ButtonContainer>
				<Button title="Filtros">
					<FilterIcon />
				</Button>
			</ButtonContainer>
			<InputComponent
				name="search"
				placeholder="Pesquise"
				type="text"
				iconStart={true}
				inputStyle={{ background: "#F4F2FF" }}
			>
				<SearchIcon />
			</InputComponent>
		</Container>
	);
};

export default SearchFilter;
