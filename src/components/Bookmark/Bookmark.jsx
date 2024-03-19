
import PropTypes from 'prop-types';

const Bookmark = ({bookmark, idx}) => {
    console.log(bookmark)

    const {title} = bookmark

    return (
        <div className='bg-white p-5 mb-4 rounded-lg'>
            <h2 className='text-lg font-semibold'>
                {idx+1}. {title}
            </h2>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.object.isRequired,
    idx: PropTypes.number
};

export default Bookmark;