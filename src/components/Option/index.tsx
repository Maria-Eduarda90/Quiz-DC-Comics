type OprionType = {
    option: string;
    answer: string;
    selectOption: () => void;
}

export function Option({ option, answer, selectOption }: OprionType){

    return(
        <>
            {option}
        </>
    );
}