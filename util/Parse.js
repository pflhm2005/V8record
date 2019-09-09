import {
  kLastLexicalVariableMode, 
  kAsyncArrowFunction,
  kAsyncGeneratorFunction, 
  kArrowFunction, 
  kAsyncConciseMethod, 
  kAsyncConciseGeneratorMethod, 
  kConciseGeneratorMethod, 
  kClassMembersInitializerFunction, 
  kBaseConstructor, 
  kDerivedConstructor, 
  kGetterFunction, 
  kSetterFunction,
  kDefaultDerivedConstructor, 
  kSloppy,
  kStrict
} from "../enum";
import { TokenIsInRange, IsInRange } from './Identifier';

export const is_sloppy = language_mode => language_mode === kSloppy;
export const is_strict = language_mode => language_mode === kStrict;

/**
 * 表达式类型判定
 */
export const IsLexicalVariableMode = (mode) =>{
  return mode <= kLastLexicalVariableMode;
}

/**
 * 是否需要自动插入分号
 */
export const IsAutoSemicolon = (token) => TokenIsInRange(token, 'SEMICOLON', 'EOS');
export const IsAsyncFunction = (kind) => IsInRange(kind, kAsyncArrowFunction, kAsyncGeneratorFunction);
export const IsArrowFunction = (kind) => IsInRange(kind, kArrowFunction, kAsyncArrowFunction);
export const IsGeneratorFunction = (kind) => IsInRange(kind, kAsyncConciseGeneratorMethod, kConciseGeneratorMethod);
export const IsConciseMethod = (kind) => IsInRange(kind, kAsyncConciseMethod, kAsyncConciseGeneratorMethod) || IsInRange(kind, kConciseGeneratorMethod, kClassMembersInitializerFunction);
export const IsClassConstructor = (kind) => IsInRange(kind, kBaseConstructor, kDerivedConstructor);
export const IsAccessorFunction = (kind) => IsInRange(kind, kGetterFunction, kSetterFunction);
export const IsDerivedConstructor = (kind) => IsInRange(kind, kDefaultDerivedConstructor, kDerivedConstructor);

export const IsArrowOrAssignmentOp = (token) => TokenIsInRange(token, 'ARROW', 'ASSIGN_SUB');

export const IsUnaryOrCountOp = op => TokenIsInRange(op, 'ADD', 'DEC');
export const IsCountOp = op => TokenIsInRange(op, 'INC', 'DEC');
export const IsPropertyOrCall = op => TokenIsInRange(op, 'TEMPLATE_SPAN', 'LPAREN');
export const IsLiteral = token => TokenIsInRange(token, 'NULL_LITERAL', 'STRING');
export const IsMember = token => TokenIsInRange(token, 'TEMPLATE_SPAN', 'LBRACK');

export const IsStrictReservedWord = token => TokenIsInRange(token, 'YIELD', 'ESCAPED_STRICT_RESERVED_WORD');

export const IsGetterFunction = kind => kind === kGetterFunction;
export const IsSetterFunction = kind => kind === kSetterFunction;

export const IsValidIdentifier = (token, language_mode, is_generator, disallow_await) => {
  if(TokenIsInRange(token, 'IDENTIFIER', 'ASYNC')) return true;
  if(token === 'Token::AWAIT') return !disallow_await;
  if(token === 'Token::YIELD') return !is_generator && is_sloppy(language_mode);
  return IsStrictReservedWord(token) && is_sloppy(language_mode);
}