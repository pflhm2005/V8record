// 这是一个脚本生成的文件 
// This file is automatically generated by gen-keywords-gen-h.py and should not
// be modified manually.
import { IsInRange } from '../base/Util'

/**
 * 特殊const就放这里算了
 */
const MIN_WORD_LENGTH = 2;
const MAX_WORD_LENGTH = 10;

const kPerfectKeywordLengthTable = [
  0, 0, 2, 3, 4, 2, 6, 7,  8, 9, 10, 2, 3, 3, 5, 3, 7, 8, 4, 5, 4, 7,
  5, 5, 5, 6, 4, 5, 6, 6,  4, 5, 7,  8, 9, 3, 4, 3, 4, 5, 5, 5, 6, 6,
  7, 5, 4, 6, 0, 0, 3, 10, 0, 0, 0,  6, 0, 0, 0, 0, 0, 0, 0, 0,
];

const kPerfectKeywordHashTable = [
  { name: '', value: 'Token::IDENTIFIER' },
  { name: '', value: 'Token::IDENTIFIER' },
  { name: 'in', value: 'Token::IN' },
  { name: 'new', value: 'Token::NEW' },
  { name: 'enum', value: 'Token::ENUM' },
  { name: 'do', value: 'Token::DO' },
  { name: 'delete', value: 'Token::DELETE' },
  { name: 'default', value: 'Token::DEFAULT' },
  { name: 'debugger', value: 'Token::DEBUGGER' },
  { name: 'interface', value: 'Token::FUTURE_STRICT_RESERVED_WORD' },
  { name: 'instanceof', value: 'Token::INSTANCEOF' },
  { name: 'if', value: 'Token::IF' },
  { name: 'get', value: 'Token::GET' },
  { name: 'set', value: 'Token::SET' },
  { name: 'const', value: 'Token::CONST' },
  { name: 'for', value: 'Token::FOR' },
  { name: 'finally', value: 'Token::FINALLY' },
  { name: 'continue', value: 'Token::CONTINUE' },
  { name: 'case', value: 'Token::CASE' },
  { name: 'catch', value: 'Token::CATCH' },
  { name: 'null', value: 'Token::NULL_LITERAL' },
  { name: 'package', value: 'Token::FUTURE_STRICT_RESERVED_WORD' },
  { name: 'false', value: 'Token::FALSE_LITERAL' },
  { name: 'async', value: 'Token::ASYNC' },
  { name: 'break', value: 'Token::BREAK' },
  { name: 'return', value: 'Token::RETURN' },
  { name: 'this', value: 'Token::THIS' },
  { name: 'throw', value: 'Token::THROW' },
  { name: 'public', value: 'Token::FUTURE_STRICT_RESERVED_WORD' },
  { name: 'static', value: 'Token::STATIC' },
  { name: 'with', value: 'Token::WITH' },
  { name: 'super', value: 'Token::SUPER' },
  { name: 'private', value: 'Token::FUTURE_STRICT_RESERVED_WORD' },
  { name: 'function', value: 'Token::FUNCTION' },
  { name: 'protected', value: 'Token::FUTURE_STRICT_RESERVED_WORD' },
  { name: 'try', value: 'Token::TRY' },
  { name: 'true', value: 'Token::TRUE_LITERAL' },
  { name: 'let', value: 'Token::LET' },
  { name: 'else', value: 'Token::ELSE' },
  { name: 'await', value: 'Token::AWAIT' },
  { name: 'while', value: 'Token::WHILE' },
  { name: 'yield', value: 'Token::YIELD' },
  { name: 'switch', value: 'Token::SWITCH' },
  { name: 'export', value: 'Token::EXPORT' },
  { name: 'extends', value: 'Token::EXTENDS' },
  { name: 'class', value: 'Token::CLASS' },
  { name: 'void', value: 'Token::VOID' },
  { name: 'import', value: 'Token::IMPORT' },
  { name: '', value: 'Token::IDENTIFIER' },
  { name: '', value: 'Token::IDENTIFIER' },
  { name: 'var', value: 'Token::VAR' },
  { name: 'implements', value: 'Token::FUTURE_STRICT_RESERVED_WORD' },
  { name: '', value: 'Token::IDENTIFIER' },
  { name: '', value: 'Token::IDENTIFIER' },
  { name: '', value: 'Token::IDENTIFIER' },
  { name: 'typeof', value: 'Token::TYPEOF' },
  { name: '', value: 'Token::IDENTIFIER' },
  { name: '', value: 'Token::IDENTIFIER' },
  { name: '', value: 'Token::IDENTIFIER' },
  { name: '', value: 'Token::IDENTIFIER' },
  { name: '', value: 'Token::IDENTIFIER' },
  { name: '', value: 'Token::IDENTIFIER' },
  { name: '', value: 'Token::IDENTIFIER' },
  { name: '', value: 'Token::IDENTIFIER' },
];

export default class PerfectKeywordHash {
  static GetToken(str, len) {
    if (IsInRange(len, MIN_WORD_LENGTH, MAX_WORD_LENGTH)) {
      let key = PerfectKeywordHash.Hash(str, len) & 0x3f;
      if (len === kPerfectKeywordLengthTable[key]) {
        const s = kPerfectKeywordHashTable[key].name;
        let l = s.length;
        let i = -1;
        /**
         * C++可以直接操作指针 JS只能搞变量了
         * 做字符严格校对 形如avr会被识别为变量
         */
        while(i++ !== l) {
          if (s[i] !== str[i]) return 'Token::IDENTIFIER';
        }
        return kPerfectKeywordHashTable[key].value;
      }
    }
    return 'Token::IDENTIFIER';
  }
  /**
   * asso_values保存了Ascii值0-127的映射
   * 所有关键词字符都有对应的hash值 而非关键词字符都是56 比如j、k、z等等
   * 至于为什么是56 因为上面table从56开始就全是Token::IDENTIFIER
   * 通过运算返回一个整形
   */
  static Hash(str, len) {
    const asso_values = [
      56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56,
      56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56,
      56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56,
      56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56,
      56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56,
      56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56,
      56, 8,  0,  6,  0,  0,  9,  9,  9,  0,  56, 56, 34, 41, 0,  3,
      6,  56, 19, 10, 13, 16, 39, 26, 37, 36, 56, 56, 56, 56, 56, 56,
    ];
    return len + asso_values[str[1].charCodeAt()] + asso_values[str[0].charCodeAt()];
  }
}