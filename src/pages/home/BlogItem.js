import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import { actionCreators as detailActionCreators } from '../detail/store'
import { Link } from 'react-router-dom'
import {
    BlogItemWrapper,
    BlogDateDisplay,
    BlogTitleDisplay,
    BlogExerptWrapper,
    BlogExerptText,
    BlogExerptImageWrapper,
    BlogExerptImage,
    BlogMetaList,
    BlogMetaListItem,
    linkStyle
} from './style'
import { stampToDate } from '../../common/util/date'
import { AUTHOR } from '../../constants'

class BlogItem extends Component {

    constructor(props) {
        super(props)
        this.state = {
            hovering: false,
            hasImage: this.props.data.imageURL !== '',
        }
        this.handleTagClick = this.handleTagClick.bind(this)
    }

    handleTagClick(index) {
        const { tagList } = this.props.data
        this.props.setTagName(tagList[index].name, tagList[index].id)
    }

    render() {
        const { id, time, title, exerpt, imageURL, tagList } = this.props.data
        const { setBlogId } = this.props
        const { hovering, hasImage } = this.state
        return (
            <BlogItemWrapper
                className={hovering ? 'hovering blog-item-wrapper' : 'blog-item-wrapper'}
                onMouseEnter={() => {this.setState(() => ({hovering: true}))}}
                onMouseLeave={() => {this.setState(() => ({hovering: false}))}}
            >
                <BlogDateDisplay className='blog-date-display'>{stampToDate(time)}</BlogDateDisplay>
                <BlogTitleDisplay>
                    <Link to={`/detail/${id}`} className='blog-title-display' style={linkStyle} onClick={() => {window.scrollTo(0, 0); setBlogId(parseInt(id))}}>
                        {title}
                    </Link>
                </BlogTitleDisplay>
                <BlogExerptWrapper
                    className={hovering && hasImage ? 'mouseIn' : 'mouseOut'}
                    ref={(el) => {this.blogWrapper = el}}
                >
                    <BlogExerptText className='blog-exerpt-text'>
                        {exerpt}
                    </BlogExerptText>
                    <BlogExerptImageWrapper className='blog-exerpt-image-wrapper'>
                        <BlogExerptImage
                            src={imageURL}
                            alt=''
                        />
                    </BlogExerptImageWrapper>
                </BlogExerptWrapper>
                <BlogMetaList>
                    <BlogMetaListItem className='blog-meta-list-item-authorName'>{AUTHOR}</BlogMetaListItem>
                    {
                        tagList.map((item, index) => (
                            <BlogMetaListItem
                                className='blog-meta-list-item link-style'
                                key={'blog-' + id + '-tag-' + item.id}
                                style={linkStyle}
                                onClick={() => {this.handleTagClick(index); document.querySelector('#page-header-display-wrapper').scrollIntoView({behavior: 'smooth'})}}
                            >
                                {item.name}
                            </BlogMetaListItem>
                        ))
                    }
                </BlogMetaList>
            </BlogItemWrapper>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    setTagName(tagName, tagId) {
        dispatch(actionCreators.setTagName(tagName, tagId))
    },
    setBlogId(currBlogId) {
        dispatch(detailActionCreators.setBlogId(currBlogId))
    }
})

export default connect(null, mapDispatchToProps)(BlogItem)