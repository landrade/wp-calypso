/** @format */
/**
 * External dependencies
 */
import { fromJS } from 'immutable';

/**
 * Internal dependencies
 */
import toggleState from '../toggle-state';

describe( 'toggleState.wpcom', () => {
	describe( 'when setting does not yet have a value', () => {
		test( 'should assign the value of `true` to that setting', () => {
			const settingToToggle = 'exampleSetting';
			const startingStateJS = {
				settings: {},
			};
			const startingState = fromJS( startingStateJS );

			const result = toggleState.wpcom( startingState, null, null, settingToToggle );
			const actual = result.toJS();
			const expected = {
				settings: {
					dirty: {
						wpcom: {
							[ settingToToggle ]: true,
						},
					},
				},
			};

			expect( actual ).toEqual( expected );
		} );
	} );

	describe( 'when setting already has a value', () => {
		test( 'should toggle the value of that setting', () => {
			const settingToToggle = 'exampleSetting';
			const startingStateJS = {
				settings: {
					dirty: {
						wpcom: {
							[ settingToToggle ]: true,
						},
					},
				},
			};
			const startingState = fromJS( startingStateJS );

			const result = toggleState.wpcom( startingState, null, null, settingToToggle );
			const actual = result.toJS();
			const expected = {
				settings: {
					dirty: {
						wpcom: {
							[ settingToToggle ]: false,
						},
					},
				},
			};

			expect( actual ).toEqual( expected );
		} );
	} );
} );

describe( 'toggleState.other', () => {
	describe( 'when `stream` is not a number', () => {
		describe( 'when setting does not yet have a value', () => {
			test( 'should toggle the value of that setting under that stream', () => {
				const stream = 'exampleStream';
				const settingToToggle = 'exampleSetting';
				const startingStateJS = {
					settings: {},
				};
				const startingState = fromJS( startingStateJS );

				const result = toggleState.other( startingState, null, stream, settingToToggle );
				const actual = result.toJS();
				const expected = {
					settings: {
						dirty: {
							other: {
								[ stream ]: {
									[ settingToToggle ]: true,
								},
							},
						},
					},
				};

				expect( actual ).toEqual( expected );
			} );
		} );

		describe( 'when setting already has a value', () => {
			test( 'should toggle the value of that setting', () => {
				const stream = 'exampleStream';
				const settingToToggle = 'exampleSetting';
				const startingStateJS = {
					settings: {
						dirty: {
							other: {
								[ stream ]: {
									[ settingToToggle ]: true,
								},
							},
						},
					},
				};
				const startingState = fromJS( startingStateJS );

				const result = toggleState.other( startingState, null, stream, settingToToggle );
				const actual = result.toJS();
				const expected = {
					settings: {
						dirty: {
							other: {
								[ stream ]: {
									[ settingToToggle ]: false,
								},
							},
						},
					},
				};

				expect( actual ).toEqual( expected );
			} );
		} );
	} );

	describe( 'when `stream` is a device ID (number)', () => {
		describe( 'when setting does not yet have a value', () => {
			test( 'should toggle the value of that setting under that stream', () => {
				const deviceId = 123456;
				const settingToToggle = 'exampleSetting';
				const deviceJS = {
					device_id: deviceId,
				};
				const startingStateJS = {
					settings: {
						dirty: {
							other: {
								devices: [ fromJS( deviceJS ) ],
							},
						},
					},
				};
				const startingState = fromJS( startingStateJS );

				const result = toggleState.other( startingState, null, deviceId, settingToToggle );
				const actual = result.toJS();
				const expected = {
					settings: {
						dirty: {
							other: {
								devices: [
									{
										device_id: deviceId,
										[ settingToToggle ]: true,
									},
								],
							},
						},
					},
				};

				expect( actual ).toEqual( expected );
			} );
		} );

		describe( 'when setting already has a value', () => {
			test( 'should toggle the value of that setting for the target device', () => {
				const deviceId = 123456;
				const settingToToggle = 'exampleSetting';
				const deviceJS = {
					device_id: deviceId,
					[ settingToToggle ]: true,
				};
				const startingStateJS = {
					settings: {
						dirty: {
							other: {
								devices: [ fromJS( deviceJS ) ],
							},
						},
					},
				};
				const startingState = fromJS( startingStateJS );

				const result = toggleState.other( startingState, null, deviceId, settingToToggle );
				const actual = result.toJS();
				const expected = {
					settings: {
						dirty: {
							other: {
								devices: [
									{
										device_id: deviceId,
										[ settingToToggle ]: false,
									},
								],
							},
						},
					},
				};

				expect( actual ).toEqual( expected );
			} );
		} );
	} );
} );