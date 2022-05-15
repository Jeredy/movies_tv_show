import styled from "styled-components";
import { ReactComponent as Search } from "../../assets/icons/search.svg";
import { ReactComponent as Filter } from "../../assets/icons/filter_alt.svg";

export const Container = styled.div`
	display: flex;
	height: 40px;
	width: 400px;
	align-items: flex-start;
	justify-content: space-between;
	margin-right: auto;
`;

export const SearchIcon = styled(Search)``;
export const FilterIcon = styled(Filter)``;

export const ButtonContainer = styled.div`
	width: 100px;
`;
