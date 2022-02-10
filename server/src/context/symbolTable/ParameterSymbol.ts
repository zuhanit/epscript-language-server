import { ParserRuleContext } from 'antlr4ts';
import { Position, Range } from 'vscode-languageserver';
import { IScope } from './IScope';
import { VariableSymbol } from './VariableSymbol';

/**
 * 매개인자 심볼.
 * 
 */
export class ParameterSymbol extends VariableSymbol {
	docString = '';

	constructor(
		name: string,
		scope: IScope,
		Range: Range,
		defNode?: ParserRuleContext,
	) {
		super(name, scope, Range, defNode);
	}
}