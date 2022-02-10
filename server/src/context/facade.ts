import { CompletionItemKind } from 'vscode-languageserver';
import { literalToType } from '../util/literalUtils';
import { ClassSymbol } from './symbolTable/ClassSymbol';
import { FunctionSymbol } from './symbolTable/FunctionSymbol';
import { ISymbol } from './symbolTable/ISymbol';
import { MemberSymbol } from './symbolTable/MemberSymbol';
import { ModuleSymbol } from './symbolTable/ModuleSymbol';
import { ParameterSymbol } from './symbolTable/ParameterSymbol';
import { VariableSymbol } from './symbolTable/VariableSymbol';
import { MethodSymbol } from './symbolTable/MethodSymbol';

export enum SymbolKind {
	Function,
	Method,
	Class,
	Member,
	Module,
	Variable,
	Constant,
	Parameter,
}

export interface SymbolInfo {
	name: string;
	detail: string;
	kind: SymbolKind
}

export const symbolKindToCompletionKind = new Map<SymbolKind, CompletionItemKind>([
	[SymbolKind.Function, CompletionItemKind.Function],
	[SymbolKind.Method, CompletionItemKind.Method],
	[SymbolKind.Class, CompletionItemKind.Class],
	[SymbolKind.Member, CompletionItemKind.Property],
	[SymbolKind.Parameter, CompletionItemKind.Variable],
	[SymbolKind.Module, CompletionItemKind.Module],
	[SymbolKind.Variable, CompletionItemKind.Variable],
	[SymbolKind.Constant, CompletionItemKind.Constant],
]);

export function translateSymbolKindToCompletionKind(kind: SymbolKind): CompletionItemKind {
	return symbolKindToCompletionKind.get(kind) || CompletionItemKind.Text;
}

export function getSymbolInfo(symbol: ISymbol): SymbolInfo {
	if (ParameterSymbol.isParameterSymbol(symbol)) {
		return {
			name: symbol.name,
			detail: `${symbol.name}${symbol.value ? ': ' + literalToType(symbol.value) : ''}`,
			kind: SymbolKind.Parameter,
		};
	}

	if (MemberSymbol.isMemberSymbol(symbol)) {
		return {
			name: symbol.name,
			detail: `(property) ${symbol.scope.name}.${symbol.name}: ${symbol.value ? literalToType(symbol.value) : 'undefined'}`,
			kind: SymbolKind.Member,
		};
	}

	if (VariableSymbol.isVariableSymbol(symbol)) {
		const kind = symbol.modifier === 'var' ? SymbolKind.Variable : SymbolKind.Constant;

		return {
			name: symbol.name,
			detail: `${symbol.modifier} ${symbol.name}: ${symbol.value ? literalToType(symbol.value) : 'undefined'}`,
			kind: kind,
		};
	}

	if (ClassSymbol.isClassSymbol(symbol)) {
		return {
			name: symbol.name,
			detail: `class ${symbol.name}`,
			kind: SymbolKind.Class,
		};
	}

	if (ModuleSymbol.isModule(symbol)) {
		return {
			name: symbol.name,
			detail: `(alias) module ${symbol.name}`,
			kind: SymbolKind.Module
		};
	}

	if (MethodSymbol.isMethodSymbol(symbol)) {	
		const args = symbol.getSymbols().filter<ParameterSymbol>(ParameterSymbol.isParameterSymbol).map(x => getSymbolInfo(x));
		return {
			name: symbol.name,
			detail: `(method) ${symbol.scope.name}.${symbol.name}(${args.map(x => x.detail).join(', ')}): ${literalToType(symbol.retType)}`,
			kind: SymbolKind.Function,
		};
	}

	if (FunctionSymbol.isFunctionSymbol(symbol)) {
		const args = symbol.getSymbols().filter<ParameterSymbol>(ParameterSymbol.isParameterSymbol).map(x => getSymbolInfo(x));
		return {
			name: symbol.name,
			detail: `function ${symbol.name}(${args.map(x => x.detail).join(', ')}): ${literalToType(symbol.retType)}`,
			kind: SymbolKind.Function,
		};
	}

	return {
		name: symbol.name,
		detail: `undefined symbol ${symbol.name}`,
		kind: SymbolKind.Variable,
	};
}