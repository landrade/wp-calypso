/**
 * External Dependencies
 */
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

/**
 * Internal dependencies
 */
import JetpackBluehostLogo from './bluehost';
import JetpackDreamhostLogo from './dreamhost';
import JetpackInmotionLogo from './inmotion';
import JetpackLogo from 'components/jetpack-logo';
import JetpackMileswebLogo from './milesweb';
import JetpackPressableLogo from './pressable';
import JetpackLiquidWebLogo from './liquidweb';
import JetpackPartnerLogoGroup from './partner-logo-group';

/**
 * Style dependencies
 */
import './style.scss';

export class JetpackHeader extends PureComponent {
	static displayName = 'JetpackHeader';

	static propTypes = {
		darkColorScheme: PropTypes.bool,
		partnerSlug: PropTypes.string,
		width: PropTypes.number,
	};

	renderLogo() {
		const { darkColorScheme, partnerSlug, width } = this.props;

		switch ( partnerSlug ) {
			case 'dreamhost':
				return (
					<JetpackPartnerLogoGroup
						width={ width || 662.5 }
						viewBox="0 0 1270 170"
						partnerName="DreamHost"
					>
						<JetpackDreamhostLogo darkColorScheme={ darkColorScheme } />
					</JetpackPartnerLogoGroup>
				);

			case 'pressable':
				return (
					<JetpackPartnerLogoGroup
						width={ width || 600 }
						viewBox="0 0 1150 170"
						partnerName="Pressable"
					>
						<JetpackPressableLogo darkColorScheme={ darkColorScheme } />
					</JetpackPartnerLogoGroup>
				);

			case 'bluehost':
				return (
					<JetpackPartnerLogoGroup
						width={ width || 588 }
						viewBox="0 0 1128 170"
						partnerName="Bluehost"
					>
						<JetpackBluehostLogo darkColorScheme={ darkColorScheme } />
					</JetpackPartnerLogoGroup>
				);

			case 'inmotion':
				return (
					<JetpackPartnerLogoGroup
						width={ width || 488 }
						viewBox="0 0 936 151"
						partnerName="InMotion"
					>
						<JetpackInmotionLogo darkColorScheme={ darkColorScheme } />
					</JetpackPartnerLogoGroup>
				);

			case 'milesweb':
				// This is a raster logo that contains the Jetpack logo already.
				return <JetpackMileswebLogo darkColorScheme={ darkColorScheme } />;

			case 'liquidweb':
				return (
					<JetpackPartnerLogoGroup
						width={ width || 488 }
						viewBox="0 0 1034 150"
						partnerName="Liquid Web"
					>
						<JetpackLiquidWebLogo darkColorScheme={ darkColorScheme } />
					</JetpackPartnerLogoGroup>
				);
			default:
				return <JetpackLogo full size={ width || 45 } />;
		}
	}

	render() {
		return <div className="jetpack-header">{ this.renderLogo() }</div>;
	}
}

export default JetpackHeader;
