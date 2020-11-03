import React from 'react'
import ArrowLeft from '../../assets/Icons/Arrows/ArrowLeft/ArrowLeft.js'
import ArrowRight from '../../assets/Icons/Arrows/ArrowRight/ArrowRight.js'
import {
  Container,
  ArrowContainer,
  Number
} from './styles.js'

export const PaginationComponent = ({ currentPage, setCurrentPage }) => {



  const handleNextPage = () => {
    if (currentPage === 36) {

    } else {
      setCurrentPage(currentPage = currentPage + 1)
    }
  }

    const handlePreviousPage = () => {
      if (currentPage === 1) {

      } else {
        setCurrentPage(currentPage = currentPage - 1)
      }
    }

  return (
    <Container>
      <ArrowContainer onClick={handlePreviousPage}>
        <ArrowLeft />
      </ArrowContainer>
      <Number>
        {currentPage}
      </Number>
      <ArrowContainer onClick={handleNextPage}>
        <ArrowRight />
      </ArrowContainer>
    </Container>
  )
}
