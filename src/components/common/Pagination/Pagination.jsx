import { Component } from 'react'
import s from './Pagination.module.css'

class Pagination extends Component {
	onClickPage = page => {
		// this.props.startLoading()
		this.props.updatePage(page)
		this.props.getSearchingMovies(this.props.searchingTitle, page)
	}

	createPageItem = (page, icon) => {
		return (
			<button
				className={s.item}
				key={page}
				onClick={this.onClickPage.bind(this, page)}
				className={this.props.currentPage === page ? s.active : ''}
			>
				{icon || page}
			</button>
		)
	}

	setSidePages = (pageItems, currentPage, totalPages) => {
		if (currentPage > 3) {
			pageItems.unshift(this.createPageItem(1, '<<'))
		}
		if (currentPage < totalPages - 2) {
			pageItems.push(this.createPageItem(totalPages, '>>'))
		}
	}

	setPrevPages = (pageItems, currentPage) => {
		for (let i = currentPage - 1; i >= currentPage - 2 && i >= 1; i--) {
			pageItems.unshift(this.createPageItem(i))
		}
	}

	setNextPages = (pageItems, currentPage, totalPages) => {
		for (let i = currentPage; i <= currentPage + 2 && i <= totalPages; i++) {
			pageItems.push(this.createPageItem(i))
		}
	}

	render() {
		const totalPages = this.props.totalPages
		const currentPage = this.props.currentPage
		const pageItems = []

		this.setPrevPages(pageItems, currentPage)
		this.setNextPages(pageItems, currentPage, totalPages)
		this.setSidePages(pageItems, currentPage, totalPages)

		return <div className={s.pagination}>{pageItems}</div>
	}
}

export default Pagination
