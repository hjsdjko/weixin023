package com.cl.entity;

import com.baomidou.mybatisplus.annotations.TableId;
import com.baomidou.mybatisplus.annotations.TableName;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.lang.reflect.InvocationTargetException;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

import org.springframework.format.annotation.DateTimeFormat;
import com.fasterxml.jackson.annotation.JsonFormat;
import org.apache.commons.beanutils.BeanUtils;
import com.baomidou.mybatisplus.annotations.TableField;
import com.baomidou.mybatisplus.enums.FieldFill;
import com.baomidou.mybatisplus.enums.IdType;


/**
 * 设施报修
 * 数据库通用操作实体类（普通增删改查）
 * @author 
 * @email 
 * @date 2024-03-29 14:15:48
 */
@TableName("sheshibaoxiu")
public class SheshibaoxiuEntity<T> implements Serializable {
	private static final long serialVersionUID = 1L;


	public SheshibaoxiuEntity() {
		
	}
	
	public SheshibaoxiuEntity(T t) {
		try {
			BeanUtils.copyProperties(this, t);
		} catch (IllegalAccessException | InvocationTargetException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	/**
	 * 主键id
	 */
	@TableId
	private Long id;
	/**
	 * 设施编号
	 */
					
	private String sheshibianhao;
	
	/**
	 * 设施名称
	 */
					
	private String sheshimingcheng;
	
	/**
	 * 设施图片
	 */
					
	private String sheshitupian;
	
	/**
	 * 所在地点
	 */
					
	private String suozaididian;
	
	/**
	 * 故障描述
	 */
					
	private String guzhangmiaoshu;
	
	/**
	 * 用户账号
	 */
					
	private String yonghuzhanghao;
	
	/**
	 * 用户姓名
	 */
					
	private String yonghuxingming;
	
	/**
	 * 申报时间
	 */
				
	@JsonFormat(locale="zh", timezone="GMT+8", pattern="yyyy-MM-dd HH:mm:ss")
	@DateTimeFormat 		
	private Date shenbaoshijian;
	
	/**
	 * 报修状态
	 */
					
	private String baoxiuzhuangtai;
	
	
	@JsonFormat(locale="zh", timezone="GMT+8", pattern="yyyy-MM-dd HH:mm:ss")
	@DateTimeFormat
	private Date addtime;

	public Date getAddtime() {
		return addtime;
	}
	public void setAddtime(Date addtime) {
		this.addtime = addtime;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}
	/**
	 * 设置：设施编号
	 */
	public void setSheshibianhao(String sheshibianhao) {
		this.sheshibianhao = sheshibianhao;
	}
	/**
	 * 获取：设施编号
	 */
	public String getSheshibianhao() {
		return sheshibianhao;
	}
	/**
	 * 设置：设施名称
	 */
	public void setSheshimingcheng(String sheshimingcheng) {
		this.sheshimingcheng = sheshimingcheng;
	}
	/**
	 * 获取：设施名称
	 */
	public String getSheshimingcheng() {
		return sheshimingcheng;
	}
	/**
	 * 设置：设施图片
	 */
	public void setSheshitupian(String sheshitupian) {
		this.sheshitupian = sheshitupian;
	}
	/**
	 * 获取：设施图片
	 */
	public String getSheshitupian() {
		return sheshitupian;
	}
	/**
	 * 设置：所在地点
	 */
	public void setSuozaididian(String suozaididian) {
		this.suozaididian = suozaididian;
	}
	/**
	 * 获取：所在地点
	 */
	public String getSuozaididian() {
		return suozaididian;
	}
	/**
	 * 设置：故障描述
	 */
	public void setGuzhangmiaoshu(String guzhangmiaoshu) {
		this.guzhangmiaoshu = guzhangmiaoshu;
	}
	/**
	 * 获取：故障描述
	 */
	public String getGuzhangmiaoshu() {
		return guzhangmiaoshu;
	}
	/**
	 * 设置：用户账号
	 */
	public void setYonghuzhanghao(String yonghuzhanghao) {
		this.yonghuzhanghao = yonghuzhanghao;
	}
	/**
	 * 获取：用户账号
	 */
	public String getYonghuzhanghao() {
		return yonghuzhanghao;
	}
	/**
	 * 设置：用户姓名
	 */
	public void setYonghuxingming(String yonghuxingming) {
		this.yonghuxingming = yonghuxingming;
	}
	/**
	 * 获取：用户姓名
	 */
	public String getYonghuxingming() {
		return yonghuxingming;
	}
	/**
	 * 设置：申报时间
	 */
	public void setShenbaoshijian(Date shenbaoshijian) {
		this.shenbaoshijian = shenbaoshijian;
	}
	/**
	 * 获取：申报时间
	 */
	public Date getShenbaoshijian() {
		return shenbaoshijian;
	}
	/**
	 * 设置：报修状态
	 */
	public void setBaoxiuzhuangtai(String baoxiuzhuangtai) {
		this.baoxiuzhuangtai = baoxiuzhuangtai;
	}
	/**
	 * 获取：报修状态
	 */
	public String getBaoxiuzhuangtai() {
		return baoxiuzhuangtai;
	}

}
