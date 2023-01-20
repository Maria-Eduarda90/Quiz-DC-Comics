type OprionType = {
    option: string;
    answer: string;
    selectOption: () => any;
}

export function Option({ option, answer, selectOption }: OprionType){

    return(
        <>
            {option}
        </>
    );
}