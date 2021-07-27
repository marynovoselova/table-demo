export type PaginationProps = {
    onCurrentPageClicked: (currentPage: number) => void,
    currentPage: number,
    pageCount: number | null
}