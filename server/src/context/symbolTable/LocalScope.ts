import { Range } from 'vscode-languageserver';
import { BaseScope } from './BaseScope';
import { IScope } from './IScope';

/**
 * { ... } 와 같은 코드 블럭 스코프.
 */
export class LocalScope extends BaseScope {
	constructor(
		range: Range,
		parent: BaseScope,
	) {
		super('local', range, parent);
	}
}