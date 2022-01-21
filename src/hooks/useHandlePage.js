
export const handleNextPage = (page, setPage) => {
  setPage({ ...page, start: page.final, final: page.final + 50 })
}

export const handleBackPage = (page, setPage) => {
  setPage({ ...page, start: page.start - 50, final: page.final - 50 })
}
