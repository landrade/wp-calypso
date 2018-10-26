/** @format */

/**
 * External dependencies
 */

import { Component } from '@wordpress/element';

/**
 * Internal dependencies
 */

class MapSave extends Component {
	render() {
		const { className, attributes } = this.props;
		const { map_style, points, zoom, map_center, marker_color, focus_location } = attributes;
		return (
			<div
				className={ className }
				data-map_style={ map_style }
				data-points={ JSON.stringify( points ) }
				data-zoom={ zoom }
				data-map_center={ JSON.stringify( map_center ) }
				data-focus_location={ JSON.stringify( focus_location ) }
				data-marker_color={ marker_color }
			/>
		);
	}
}

export default MapSave;
